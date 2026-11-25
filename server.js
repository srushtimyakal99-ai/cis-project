// Centurion International School – backend (Express + SQLite)
const express=require('express'),Database=require('better-sqlite3'),crypto=require('crypto'),
  rateLimit=require('express-rate-limit'),path=require('path'),fs=require('fs');
const PORT=process.env.PORT||3000, ADMIN_PASSWORD=process.env.ADMIN_PASSWORD;
const db=new Database(process.env.DB_PATH||path.join(__dirname,'school.db'));
db.exec(`
create table if not exists visitors(id integer primary key,name text,phone text unique,email text,created text default current_timestamp,last_login text);
create table if not exists sessions(token text primary key,visitor_id integer,created text default current_timestamp);
create table if not exists enquiries(id integer primary key,kind text,name text,phone text,email text,class_applying text,message text,created text default current_timestamp);`);
const app=express();app.set('trust proxy',1);
app.use(express.json({limit:'10kb'}));
app.use('/api',rateLimit({windowMs:15*60*1000,limit:60,message:{error:'Too many requests. Please try again later.'}}));

const clean=(s,n=300)=>String(s??'').trim().slice(0,n);
const phone=p=>String(p||'').replace(/[\s+-]/g,'').replace(/^91(?=\d{10}$)/,'');
const okPhone=p=>/^[6-9]\d{9}$/.test(p), okEmail=e=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);
const getCookie=(req,n)=>(req.headers.cookie||'').split(';').map(c=>c.trim().split('=')).find(c=>c[0]===n)?.[1];
const me=req=>{const t=getCookie(req,'cis_session');return t&&db.prepare('select v.name,v.phone,v.email from sessions s join visitors v on v.id=s.visitor_id where s.token=?').get(t)};

app.post('/api/login',(req,res)=>{
  const name=clean(req.body.name,80),ph=phone(req.body.phone),email=clean(req.body.email,120).toLowerCase();
  if(name.length<2||!okPhone(ph)||!okEmail(email))return res.status(400).json({error:'Please enter a valid name, 10-digit mobile number and email.'});
  db.prepare(`insert into visitors(name,phone,email,last_login) values(?,?,?,current_timestamp)
    on conflict(phone) do update set name=excluded.name,email=excluded.email,last_login=current_timestamp`).run(name,ph,email);
  const id=db.prepare('select id from visitors where phone=?').get(ph).id,token=crypto.randomBytes(32).toString('hex');
  db.prepare('insert into sessions(token,visitor_id) values(?,?)').run(token,id);
  res.setHeader('Set-Cookie',`cis_session=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=2592000${req.secure?'; Secure':''}`);
  res.json({name,phone:ph,email});
});
app.get('/api/me',(req,res)=>{const u=me(req);u?res.json(u):res.status(401).json({})});
app.post('/api/logout',(req,res)=>{const t=getCookie(req,'cis_session');if(t)db.prepare('delete from sessions where token=?').run(t);
  res.setHeader('Set-Cookie','cis_session=; HttpOnly; Path=/; Max-Age=0');res.json({ok:true})});

function saveForm(kind){return(req,res)=>{
  const b=req.body,name=clean(b.name,80),ph=phone(b.phone),email=clean(b.email,120),cls=clean(b.classApplying,60),msg=clean(b.message,1000);
  if(name.length<2||!okPhone(ph)||!okEmail(email)||(kind==='enquiry'&&!cls)||(kind==='contact'&&!msg))
    return res.status(400).json({error:'Please fill in all required fields correctly.'});
  db.prepare('insert into enquiries(kind,name,phone,email,class_applying,message) values(?,?,?,?,?,?)').run(kind,name,ph,email,cls,msg);
  res.json({ok:true});}}
app.post('/api/enquiry',saveForm('enquiry'));
app.post('/api/contact',saveForm('contact'));

// ---- Admin (HTTP Basic auth, password from ADMIN_PASSWORD) ----
function admin(req,res,next){
  if(!ADMIN_PASSWORD)return res.status(503).send('Admin is disabled. Start the server with ADMIN_PASSWORD set.');
  const given=Buffer.from((req.headers.authorization||'').split(' ')[1]||'','base64').toString().split(':').slice(1).join(':');
  const a=Buffer.from(given),b=Buffer.from(ADMIN_PASSWORD);
  if(a.length===b.length&&crypto.timingSafeEqual(a,b))return next();
  res.set('WWW-Authenticate','Basic realm="CIS admin"').status(401).send('Login required');
}
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tables={visitors:'select id,name,phone,email,created,last_login from visitors order by id desc',
  enquiries:'select id,kind,name,phone,email,class_applying,message,created from enquiries order by id desc'};
app.get('/admin',admin,(req,res)=>{
  const t=n=>{const r=db.prepare(tables[n]).all();return `<h2>${n} (${r.length}) <a href="/admin/export/${n}.csv">Download CSV</a></h2><div style="overflow:auto"><table><tr>${Object.keys(r[0]||{id:0}).map(k=>`<th>${k}</th>`).join('')}</tr>${r.map(x=>`<tr>${Object.values(x).map(v=>`<td>${esc(v)}</td>`).join('')}</tr>`).join('')}</table></div>`};
  res.send(`<!doctype html><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><title>CIS admin</title><style>body{font-family:system-ui;margin:20px}table{border-collapse:collapse}td,th{border:1px solid #ccc;padding:6px 10px;text-align:left;font-size:14px}th{background:#0b2a5b;color:#fff}</style><h1>Centurion International School – Admin</h1>${t('enquiries')}${t('visitors')}`);
});
app.get('/admin/export/:name.csv',admin,(req,res)=>{
  const q=tables[req.params.name];if(!q)return res.sendStatus(404);
  const rows=db.prepare(q).all(),cell=v=>{v=String(v??'');if(/^[=+\-@]/.test(v))v="'"+v;return '"'+v.replace(/"/g,'""')+'"'};
  res.type('text/csv').send([Object.keys(rows[0]||{id:0}).join(','),...rows.map(r=>Object.values(r).map(cell).join(','))].join('\n'));
});

// ---- Website (built React app) ----
const dist=path.join(__dirname,'client','dist');
app.use(express.static(dist));
app.get('*',(req,res)=>fs.existsSync(path.join(dist,'index.html'))?res.sendFile(path.join(dist,'index.html')):res.status(503).send('Website not built yet. Run: npm run build'));
app.listen(PORT,()=>console.log(`School website running at http://localhost:${PORT}`+(ADMIN_PASSWORD?'  (admin: /admin)':'  (admin disabled: set ADMIN_PASSWORD)')));

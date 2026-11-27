import {useState} from 'react';import {api} from '../api.js';
import {validate} from '../components/validate.js';
export default function Contact(){
  const [f,setF]=useState({name:'',phone:'',email:'',message:''});
  const [err,setErr]=useState({}),[done,setDone]=useState(false),[fail,setFail]=useState(''),[busy,setBusy]=useState(false);
  const set=k=>e=>setF({...f,[k]:e.target.value});
  async function submit(e){e.preventDefault();const v=validate(f,['name','phone','email','message']);setErr(v);setFail('');setDone(false);
    if(Object.keys(v).length)return;setBusy(true);
    try{await api('/api/contact','POST',f);setDone(true);setF({name:'',phone:'',email:'',message:''})}catch(x){setFail(x.message)}
    setBusy(false)}
  return <>
    <section className="page-top"><div className="wrap">
      <h1>Parent Corner &amp; Contact</h1>
      <p>Questions about admissions, fees or transport? We're happy to help.</p>
    </div></section>
    
    <section><div className="wrap">
      <h2>Parent corner</h2>
      <p className="lead">Latest updates and notices from the school office.</p>
      <div className="grid">
        <div className="card">
          <span className="tag">Notice</span>
          <h3>Announcements</h3>
          <p>Parent-Teacher Meeting (PTM) for all classes will be held on Saturday, 14th December. Timings will be shared via WhatsApp.</p>
        </div>
        <div className="card">
          <span className="tag">Important</span>
          <h3>Important notices</h3>
          <p>Please ensure all outstanding fees for the current term are cleared before the 10th of this month to avoid late fines.</p>
        </div>
        <div className="card">
          <span className="tag">Updates</span>
          <h3>Holiday updates</h3>
          <p>The school will remain closed for Winter Break from 24th December to 1st January. Classes resume on 2nd January.</p>
        </div>
        <div className="card">
          <span className="tag">Exams</span>
          <h3>Examination notifications</h3>
          <p>The Term 2 examination timetable has been sent home with students. Please check the dates and help your child prepare.</p>
        </div>
        <div className="card">
          <span className="tag">Events</span>
          <h3>Upcoming events</h3>
          <p>Our Annual Sports Day will take place on 20th January. Parents are warmly invited to attend and cheer for the students.</p>
        </div>
        <div className="card">
          <span className="tag">Contact</span>
          <h3>Parent communication</h3>
          <p>For any urgent queries, call the school office at +91 76193 20144 or email us at cisyadgir@gmail.com.</p>
        </div>
      </div>
    </div></section>

    <section className="alt"><div className="wrap">
      <div className="grid">
        <div className="card"><div className="ic">📍</div><h3>Address</h3><p>Green City Layout, Chittapur Road,<br/>Yadgir, Karnataka</p></div>
        <div className="card"><div className="ic">📞</div><h3>Phone</h3><p><a href="tel:+917619320144">+91 76193 20144</a><br/><a href="tel:+919980510123">+91 99805 10123</a></p></div>
        <div className="card"><div className="ic">✉️</div><h3>Email</h3><p><a href="mailto:cisyadgir@gmail.com">cisyadgir@gmail.com</a></p></div>
        <div className="card"><div className="ic">🕘</div><h3>Office hours</h3><p>Monday to Saturday<br/>9:00 am – 4:00 pm<br/>Closed on public holidays</p></div>
      </div>
    </div></section>

    <section><div className="wrap two">
      <div>
        <h2>Send us a message</h2>
        <p className="lead">We reply during office hours, usually within a day.</p>
        <div className="ok" style={{display:done?'block':'none'}}>Thank you — your message has been sent. We'll get back to you soon.</div>
        <form onSubmit={submit} noValidate>
          <label>Your name<input value={f.name} onChange={set('name')} autoComplete="name"/><span className="err">{err.name||''}</span></label>
          <label>Mobile number<input value={f.phone} onChange={set('phone')} inputMode="numeric" autoComplete="tel"/><span className="err">{err.phone||''}</span></label>
          <label>Email<input value={f.email} onChange={set('email')} type="email" autoComplete="email"/><span className="err">{err.email||''}</span></label>
          <label>Message<textarea rows="5" value={f.message} onChange={set('message')}/><span className="err">{err.message||''}</span></label>
          {fail&&<div className="fail">{fail}</div>}
          <button className="btn dark" disabled={busy}>{busy?'Sending…':'Send message'}</button>
        </form>
      </div>
      <div>
        <h2>Find us</h2>
        <iframe title="Map to Centurion International School, Yadgir" loading="lazy"
          src="https://www.google.com/maps?q=Centurion+International+School+Yadgir+Karnataka&output=embed"/>
      </div>
    </div></section>
  </>;
}
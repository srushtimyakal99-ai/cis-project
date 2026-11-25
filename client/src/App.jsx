import {useEffect,useState} from 'react';import {Routes,Route,Link,NavLink,useLocation} from 'react-router-dom';
import {api} from './api.js';import Login from './components/Login.jsx';
import Home from './pages/Home.jsx';import About from './pages/About.jsx';import Facilities from './pages/Facilities.jsx';
import Admissions from './pages/Admissions.jsx';import Contact from './pages/Contact.jsx';

const links=[['/','Home'],['/about','About & Academics'],['/facilities','Facilities & Gallery'],['/admissions','Admissions & Fees'],['/contact','Parent Corner & Contact']];

export default function App(){
  const [user,setUser]=useState(undefined); // undefined = checking, null = logged out
  const [open,setOpen]=useState(false),[showTop,setShowTop]=useState(false);
  const {pathname,hash}=useLocation();
  useEffect(()=>{api('/api/me').then(setUser).catch(()=>setUser(null))},[]);
  useEffect(()=>{setOpen(false);if(hash)setTimeout(()=>document.querySelector(hash)?.scrollIntoView({behavior:'smooth'}),50);else scrollTo(0,0)},[pathname,hash]);
  useEffect(()=>{const f=()=>setShowTop(scrollY>400);addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
  const logout=async()=>{await api('/api/logout','POST').catch(()=>{});setUser(null)};
  if(user===undefined)return null;
  if(user===null)return <Login onDone={setUser}/>;
  return <>
    <header><div className="wrap bar">
      <Link className="brand" to="/"><img className="logo" src="/images/logo.png" alt="Centurion International School logo"/>Centurion International School</Link>
      <span className="who">Hi, {user.name.split(' ')[0]} · <button onClick={logout}>Log out</button></span>
      <button id="menu" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)}>☰</button>
      <nav><ul className={open?'open':''}>{links.map(([to,t])=><li key={to}><NavLink to={to} end={to==='/'} className={({isActive})=>isActive?'on':''}>{t}</NavLink></li>)}</ul></nav>
    </div></header>
    <Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/facilities" element={<Facilities/>}/>
      <Route path="/admissions" element={<Admissions/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes>
    <footer><div className="wrap two">
      <div><h3>Centurion International School</h3><p>Traditional Values, Modern Outlook. Run by Margadarshana Education Trust (R), Yadgir.</p></div>
      <div><h3>Quick links</h3><ul>{links.slice(1).map(([to,t])=><li key={to}><Link to={to}>{t}</Link></li>)}</ul></div>
      <div><h3>Contact</h3><p>Green City Layout, Chittapur Road,<br/>Yadgir, Karnataka<br/><a href="tel:+917619320144">+91 76193 20144</a> · <a href="tel:+919980510123">+91 99805 10123</a><br/><a href="mailto:cisyadgir@gmail.com">cisyadgir@gmail.com</a><br/><a href="https://centurioninternationalschool.com/">centurioninternationalschool.com</a></p></div>
    </div><div className="wrap copy">© {new Date().getFullYear()} Centurion International School. All rights reserved.</div></footer>
    {showTop&&<button id="top" style={{display:'block'}} aria-label="Back to top" onClick={()=>scrollTo({top:0,behavior:'smooth'})}>↑</button>}
  </>;
}

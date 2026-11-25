import {useState} from 'react';import {api} from '../api.js';
import {validate} from './validate.js';
export default function Login({onDone}){
  const [f,setF]=useState({name:'',phone:'',email:''}),[err,setErr]=useState({}),[msg,setMsg]=useState(''),[busy,setBusy]=useState(false);
  const set=k=>e=>setF({...f,[k]:e.target.value});
  async function submit(e){e.preventDefault();const v=validate(f,['name','phone','email']);setErr(v);setMsg('');
    if(Object.keys(v).length)return;setBusy(true);
    try{onDone(await api('/api/login','POST',f))}catch(x){setMsg(x.message)}setBusy(false)}
  return <div id="login"><div className="box"><img src="/images/logo.png" alt=""/><h2>Welcome to Centurion International School</h2>
    <form onSubmit={submit} noValidate style={{marginTop:14}}>
      <div><label htmlFor="ln">Name</label><input id="ln" autoComplete="name" value={f.name} onChange={set('name')}/><span className="err">{err.name}</span></div>
      <div><label htmlFor="lp">Mobile number</label><input id="lp" type="tel" autoComplete="tel" value={f.phone} onChange={set('phone')}/><span className="err">{err.phone}</span></div>
      <div><label htmlFor="le">Email ID</label><input id="le" type="email" autoComplete="email" value={f.email} onChange={set('email')}/><span className="err">{err.email}</span></div>
      {msg&&<div className="fail">{msg}</div>}
      <button className="btn dark" type="submit" disabled={busy}>{busy?'Please wait…':'Login & enter'}</button></form>
    <p className="s">By logging in you share your name, mobile number and email with the school office.</p></div></div>;
}

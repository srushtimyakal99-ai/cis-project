import {useState} from 'react';import {api} from '../api.js';import {validate} from './validate.js';
// kind="enquiry" -> admission enquiry (needs class), kind="contact" -> general message (needs message)
export default function EnquiryForm({kind}){
  const enquiry=kind==='enquiry';
  const empty={name:'',phone:'',email:'',classApplying:'',message:''};
  const [f,setF]=useState(empty),[err,setErr]=useState({}),[status,setStatus]=useState(''),[msg,setMsg]=useState('');
  const set=k=>e=>setF({...f,[k]:e.target.value});
  async function submit(e){e.preventDefault();setStatus('');
    const v=validate(f,['name','phone','email',enquiry?'classApplying':'message']);setErr(v);if(Object.keys(v).length)return;
    try{await api('/api/'+kind,'POST',f);setStatus('ok');setF(empty)}catch(x){setStatus('fail');setMsg(x.message)}}
  const Field=({k,label,type='text',area})=><div><label htmlFor={kind+k}>{label}</label>
    {area?<textarea id={kind+k} rows="3" value={f[k]} onChange={set(k)}/>:<input id={kind+k} type={type} value={f[k]} onChange={set(k)}/>}<span className="err">{err[k]}</span></div>;
  return <form onSubmit={submit} noValidate>
    <Field k="name" label={enquiry?'Student / parent name':'Name'}/><Field k="phone" label="Parent contact number" type="tel"/><Field k="email" label="Email" type="email"/>
    {enquiry&&<Field k="classApplying" label="Class applying for"/>}<Field k="message" label="Message" area/>
    <button className="btn dark" type="submit">{enquiry?'Send enquiry':'Send message'}</button>
    {status==='ok'&&<div className="ok" style={{display:'block'}}>Thank you! The school office has received your {enquiry?'enquiry':'message'} and will contact you on the number provided.</div>}
    {status==='fail'&&<div className="fail">{msg}</div>}</form>;
}

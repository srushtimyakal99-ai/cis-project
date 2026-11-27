import {useState} from 'react';import {api} from '../api.js';
import {validate} from '../components/validate.js';
const classes=['Pre-KG','LKG','UKG','Grade I','Grade II','Grade III','Grade IV','Grade V','Grade VI','Grade VII','Grade VIII','Grade IX','Grade X'];
export default function Admissions(){
  const [f,setF]=useState({name:'',phone:'',email:'',classApplying:'',message:''});
  const [err,setErr]=useState({}),[done,setDone]=useState(false),[fail,setFail]=useState(''),[busy,setBusy]=useState(false);
  const set=k=>e=>setF({...f,[k]:e.target.value});
  async function submit(e){e.preventDefault();const v=validate(f,['name','phone','email','classApplying']);setErr(v);setFail('');setDone(false);
    if(Object.keys(v).length)return;setBusy(true);
    try{await api('/api/enquiry','POST',f);setDone(true);setF({name:'',phone:'',email:'',classApplying:'',message:''})}catch(x){setFail(x.message)}
    setBusy(false)}
  return <>
    <section className="page-top"><div className="wrap">
      <h1>Admissions &amp; Fees</h1>
      <p>Everything you need to apply.</p>
    </div></section>
    <section><div className="wrap">
      <h2>Admission information</h2>
      <p className="lead">Admissions for the 2026–27 academic year are open for Pre-KG to Grade X.</p>
      
      <div className="two">
        <div>
          <h3>Procedure</h3>
          <ol style={{paddingLeft:'20px', marginBottom:'20px'}}>
            <li>Submit the online enquiry form or visit the school office.</li>
            <li>Attend a brief interaction session with the Principal.</li>
            <li>Submit required documents for verification.</li>
            <li>Pay the admission fee to confirm the seat.</li>
          </ol>
        </div>
        <div>
          <h3>Documents Required</h3>
          <ul style={{paddingLeft:'20px'}}>
            <li>Birth Certificate (original and copy)</li>
            <li>Transfer Certificate (TC) from previous school</li>
            <li>Aadhaar Card copy of student and parents</li>
            <li>Recent Report Card / Marksheet</li>
            <li>4 Passport size photographs</li>
          </ul>
        </div>
      </div>
    </div></section>

    <section className="alt"><div className="wrap">
      <h2>Fee structure 2026–27</h2>
      <p className="lead">Complete fee breakdown for the academic year.</p>
      <div className="tbl"><table>
        <thead><tr><th>Class</th><th>Admission fee</th><th>Tuition fee</th><th>Other charges</th><th>Total</th></tr></thead>
        <tbody>
          <tr><td>Pre-KG</td><td>₹ 5,000</td><td>₹ 20,000</td><td>₹ 0</td><td>₹ 25,000</td></tr>
          <tr><td>LKG</td><td>₹ 5,000</td><td>₹ 20,000</td><td>₹ 0</td><td>₹ 25,000</td></tr>
          <tr><td>UKG</td><td>₹ 5,000</td><td>₹ 20,000</td><td>₹ 0</td><td>₹ 25,000</td></tr>
          <tr><td>Grade I</td><td>₹ 10,000</td><td>₹ 30,000</td><td>₹ 0</td><td>₹ 40,000</td></tr>
          <tr><td>Grade II</td><td>₹ 10,000</td><td>₹ 32,000</td><td>₹ 0</td><td>₹ 42,000</td></tr>
          <tr><td>Grade III</td><td>₹ 10,000</td><td>₹ 32,000</td><td>₹ 0</td><td>₹ 42,000</td></tr>
          <tr><td>Grade IV</td><td>₹ 10,000</td><td>₹ 35,000</td><td>₹ 0</td><td>₹ 45,000</td></tr>
          <tr><td>Grade V</td><td>₹ 10,000</td><td>₹ 35,000</td><td>₹ 0</td><td>₹ 45,000</td></tr>
          <tr><td>Grade VI</td><td>₹ 12,000</td><td>₹ 38,000</td><td>₹ 0</td><td>₹ 50,000</td></tr>
          <tr><td>Grade VII</td><td>₹ 12,000</td><td>₹ 38,000</td><td>₹ 0</td><td>₹ 50,000</td></tr>
          <tr><td>Grade VIII</td><td>₹ 12,000</td><td>₹ 40,000</td><td>₹ 0</td><td>₹ 52,000</td></tr>
          <tr><td>Grade IX</td><td>₹ 15,000</td><td>₹ 45,000</td><td>₹ 0</td><td>₹ 60,000</td></tr>
          <tr><td>Grade X</td><td>₹ 15,000</td><td>₹ 45,000</td><td>₹ 0</td><td>₹ 60,000</td></tr>
        </tbody>
      </table></div>
      <p className="note">Please contact the school office to confirm the latest fees and payment schedules.</p>
      
      <h3 style={{marginTop:'30px'}}>Frequently Asked Questions (FAQ)</h3>
      <details><summary>How do I apply?</summary><p>You can fill out the admission enquiry form on this page, call the school office, or visit us in person during office hours.</p></details>
      <details><summary>What documents are needed?</summary><p>You will need the child's Birth Certificate, Aadhaar card, Transfer Certificate (if applicable), previous year's report card, and passport-size photographs.</p></details>
      <details><summary>How can I confirm current fees?</summary><p>Please call +91 76193 20144 or email cisyadgir@gmail.com to confirm the fee structure for your child's specific class.</p></details>
    </div></section>

    <section><div className="wrap">
      <h2>Admission enquiry</h2>
      <p className="lead">Leave your details and the school office will call you back.</p>
      <div className="ok" style={{display:done?'block':'none'}}>Thank you — your enquiry has been sent. The school office will contact you shortly.</div>
      <form onSubmit={submit} noValidate>
        <label>Student / parent name<input value={f.name} onChange={set('name')} autoComplete="name"/><span className="err">{err.name||''}</span></label>
        <label>Parent contact number<input value={f.phone} onChange={set('phone')} inputMode="numeric" autoComplete="tel"/><span className="err">{err.phone||''}</span></label>
        <label>Email<input value={f.email} onChange={set('email')} type="email" autoComplete="email"/><span className="err">{err.email||''}</span></label>
        <label>Class applying for<select value={f.classApplying} onChange={set('classApplying')}>
          <option value="">Select a class</option>{classes.map(c=><option key={c} value={c}>{c}</option>)}
        </select><span className="err">{err.classApplying||''}</span></label>
        <label>Anything we should know? (optional)<textarea rows="4" value={f.message} onChange={set('message')}/></label>
        {fail&&<div className="fail">{fail}</div>}
        <button className="btn dark" disabled={busy}>{busy?'Sending…':'Send enquiry'}</button>
      </form>
    </div></section>
  </>;
}
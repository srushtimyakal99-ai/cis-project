import {Link} from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm.jsx';
export default function Admissions(){return <><div className="page-top"><div className="wrap"><h1>Admissions &amp; Fees</h1><p>Everything you need to apply.</p></div></div>
<section><div className="wrap two"><div><h2>Admission information</h2><p>[Add admission procedure, eligibility by class and required documents. Mention 2027–28 admissions only if the school confirms they are open.]</p>
<h3 style={{marginTop:'20px'}}>Procedure</h3><p>[Steps]</p><h3 style={{marginTop:'20px'}}>Documents</h3><p>[List]</p>
<p style={{marginTop:'20px'}}><a className="btn dark" href="tel:+917619320144">Call Now</a><a className="btn" href="https://wa.me/917619320144?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions." target="_blank" rel="noopener">WhatsApp Enquiry</a></p></div>
<div><h2>Admission enquiry</h2><EnquiryForm kind="enquiry"/></div></div></section>
<section className="alt"><div className="wrap"><h2>Fee structure</h2><div className="tbl"><table><tbody><tr><th>Class</th><th>Admission fee</th><th>Tuition fee</th><th>Other charges</th><th>Total</th></tr>
<tr><td>[Class]</td><td>₹ [amount]</td><td>₹ [amount]</td><td>₹ [amount]</td><td>₹ [total]</td></tr><tr><td>[Class]</td><td>₹ [amount]</td><td>₹ [amount]</td><td>₹ [amount]</td><td>₹ [total]</td></tr></tbody></table></div>
<div className="note">Please contact the school to confirm the latest fees.</div></div></section>
<section><div className="wrap"><h2>FAQ</h2><details><summary>How do I apply?</summary><p>[Answer from the school]</p></details><details><summary>What documents are needed?</summary><p>[Answer]</p></details><details><summary>How can I confirm current fees?</summary><p>Call +91 76193 20144 or email cisyadgir@gmail.com.</p></details></div></section></>}

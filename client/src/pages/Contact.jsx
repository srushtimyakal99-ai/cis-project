import {Link} from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm.jsx';
export default function Contact(){return <><div className="page-top"><div className="wrap"><h1>Parent Corner &amp; Contact</h1><p>Notices, location and ways to reach us.</p></div></div>
<section><div className="wrap"><h2>Parent corner</h2><p className="lead">Sample labels – replace with real notices.</p><div className="grid">
<div className="card"><span className="tag">Sample</span><h3>Announcements</h3><p>[Text]</p></div><div className="card"><span className="tag">Sample</span><h3>Important notices</h3><p>[Text]</p></div><div className="card"><span className="tag">Sample</span><h3>Holiday updates</h3><p>[Text]</p></div>
<div className="card"><span className="tag">Sample</span><h3>Examination notifications</h3><p>[Text]</p></div><div className="card"><span className="tag">Sample</span><h3>Upcoming events</h3><p>[Text]</p></div><div className="card"><h3>Parent communication</h3><p>Call, email or WhatsApp the school office.</p></div></div></div></section>
<section className="alt"><div className="wrap two"><div><h2>Find us</h2><p>Green City Layout, Chittapur Road, Yadgir, Karnataka<br/>📞 <a href="tel:+917619320144">+91 76193 20144</a> · <a href="tel:+919980510123">+91 99805 10123</a><br/>✉️ <a href="mailto:cisyadgir@gmail.com">cisyadgir@gmail.com</a></p>
<div className="note">Address taken from the school brochure. Confirm the map pin lands on the school before publishing.</div>
<iframe title="Map of Centurion International School" loading="lazy" src="https://www.google.com/maps?q=Centurion+International+School+Green+City+Layout+Chittapur+Road+Yadgir&amp;output=embed"></iframe>
<p style={{marginTop:'14px'}}><a className="btn dark" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&amp;destination=Centurion+International+School+Green+City+Layout+Chittapur+Road+Yadgir">Get Directions</a><a className="btn" target="_blank" rel="noopener" href="https://wa.me/917619320144">WhatsApp</a></p></div>
<div><h2>Send a message</h2><EnquiryForm kind="contact"/></div></div></section></>}

import {Link} from 'react-router-dom';
export default function Home(){return <><div className="hero" style={{backgroundImage:'linear-gradient(115deg,rgba(11,42,91,.92) 40%,rgba(11,42,91,.35)),url(/images/campus.jpg)'}}><div className="wrap"><h1>Welcome to Centurion International School</h1>
<p>Traditional Values, Modern Outlook. We nurture a caring and innovative learning environment in Yadgir, with focus on the holistic development of every child.</p>
<Link className="btn" to="/about">Explore Our School</Link><Link className="btn ghost" to="/admissions">Admissions</Link><Link className="btn ghost" to="/contact">Contact Us</Link></div></div>
<section><div className="wrap"><h2>Why families choose us</h2><p className="lead">Learning supported by activities, practice and care. [Confirm each highlight with the school.]</p>
<div className="grid"><div className="card"><div className="ic">🧪</div><h3>Experiential learning</h3><p>Learning by doing, beyond the textbook.</p></div>
<div className="card"><div className="ic">📚</div><h3>Enrichment &amp; remedial classes</h3><p>Extra support and extra challenge.</p></div>
<div className="card"><div className="ic">🏫</div><h3>Campus facilities</h3><p>See <Link to="/facilities">facilities</Link> verified by the school.</p></div>
<div className="card"><div className="ic">🎭</div><h3>Activities</h3><p>Sports, culture, quizzes and celebrations.</p></div></div></div></section>
<section className="alt"><div className="wrap"><h2>Announcements &amp; events</h2><div className="grid">
<div className="card"><span className="tag">Event</span><h3>High School Sports Meet 2025–26</h3><p>Students marched and performed on the school ground.</p></div>
<div className="card"><span className="tag">Event</span><h3>Annual Sports Day</h3><p>Our youngest students joined in the fun.</p></div>
<div className="card"><span className="tag">Sample label</span><h3>[Notice title]</h3><p>[Date and details from the school]</p></div></div></div></section>
<section><div className="wrap"><h2>Gallery preview</h2><div className="grid"><div className="ph"><img src="/images/event1.jpg" alt="Students on stage with certificates" loading="lazy"/></div><div className="ph"><img src="/images/sports1.jpg" alt="High School Sports Meet 2025-26" loading="lazy"/></div><div className="ph"><img src="/images/event5.jpg" alt="Ribbon cutting with students in costume" loading="lazy"/></div></div>
<p style={{marginTop:'16px'}}><Link className="btn dark" to="/facilities#gallery">Open full gallery</Link></p></div></section>
<section className="alt"><div className="wrap"><h2>Get in touch</h2><p>📞 <a href="tel:+917619320144">+91 76193 20144</a> &nbsp; ✉️ <a href="mailto:cisyadgir@gmail.com">cisyadgir@gmail.com</a></p></div></section></>}

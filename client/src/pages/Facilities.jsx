import {Link} from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
export default function Facilities(){return <><div className="page-top"><div className="wrap"><h1>Facilities, Activities &amp; Gallery</h1><p>Life on campus.</p></div></div>
<section><div className="wrap"><h2>Facilities</h2><div className="note">Keep only the facilities the school confirms; delete the rest.</div><div className="grid">
<div className="card"><div className="ph" data-label="Photo"></div><h3>Smart Classrooms</h3><p>[Description]</p></div><div className="card"><div className="ph" data-label="Photo"></div><h3>Library</h3><p>[Description]</p></div>
<div className="card"><div className="ph" data-label="Photo"></div><h3>Computer Laboratory</h3><p>[Description]</p></div><div className="card"><div className="ph" data-label="Photo"></div><h3>Playground</h3><p>[Description]</p></div>
<div className="card"><div className="ph" data-label="Photo"></div><h3>Swimming Pool</h3><p>[Confirm availability]</p></div><div className="card"><div className="ph" data-label="Photo"></div><h3>School Transportation</h3><p>[Description]</p></div>
<div className="card"><div className="ph" data-label="Photo"></div><h3>CCTV and Safety</h3><p>[Description]</p></div></div></div></section>
<section className="alt"><div className="wrap"><h2>Activities &amp; events</h2><p className="lead">Add dates only when verified.</p><div className="grid">
<div className="card"><h3>Annual Day</h3><p>[Description, date]</p></div><div className="card"><h3>Sports Week</h3><p>[Description, date]</p></div><div className="card"><h3>Science Exhibitions</h3><p>[Description, date]</p></div>
<div className="card"><h3>Debates</h3><p>[Description]</p></div><div className="card"><h3>Quiz Competitions</h3><p>[Description]</p></div><div className="card"><h3>Cultural Activities</h3><p>[Description]</p></div><div className="card"><h3>Student Celebrations</h3><p>[Description]</p></div></div></div></section>
<Gallery/></>}

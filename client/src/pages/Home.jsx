import {Link} from 'react-router-dom';
const features=[
  ['📚','Strong academics','English-medium instruction from pre-primary to Grade X with continuous assessment.'],
  ['👩‍🏫','Experienced faculty','Trained teachers, small classes and individual attention for every child.'],
  ['🔬','Labs & library','Science, maths and computer labs plus a well-stocked reading library.'],
  ['🚌','Safe transport','Bus routes covering Yadgir town and nearby villages.'],
  ['⚽','Sports & arts','Cricket, volleyball, yoga, music and dance in the weekly timetable.'],
  ['🛡️','Caring campus','CCTV-monitored premises, first-aid room and trained support staff.'],
];
export default function Home(){
  return <>
    <section className="hero" style={{backgroundImage:"linear-gradient(115deg,rgba(11,42,91,.93) 45%,rgba(31,79,163,.6)),url('/images/campus.jpg')"}}>
      <div className="wrap">
        <h1>Traditional Values, Modern Outlook</h1>
        <p>Centurion International School, Yadgir — an English-medium school run by Margadarshana Education Trust (R), helping children grow into confident, kind and capable learners.</p>
        <Link className="btn" to="/admissions">Admissions Open</Link>
        <Link className="btn ghost" to="/contact">Talk to us</Link>
      </div>
    </section>
    <section>
      <div className="wrap">
        <h2>Why families choose Centurion</h2>
        <p className="lead">A disciplined, caring campus on Chittapur Road where academics, sports and values grow together.</p>
        <div className="grid">{features.map(([ic,t,d])=><div className="card" key={t}><div className="ic">{ic}</div><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div>
    </section>
    <section className="alt">
      <div className="wrap two">
        <div>
          <h2>Admissions 2026–27</h2>
          <p>Applications are open for pre-primary to Grade X. Seats are limited and filled after an informal interaction with the child and parents.</p>
          <p className="note">Please bring the child's birth certificate, Aadhaar, last report card and two passport photos.</p>
          <Link className="btn dark" to="/admissions">See fees and apply</Link>
        </div>
        <div className="ph" data-label="Photo: students in class">
          <img src="/images/event1.jpg" alt="Students at Centurion International School" loading="lazy" onError={e=>e.currentTarget.remove()}/>
        </div>
      </div>
    </section>
    <section>
      <div className="wrap two">
        <div>
          <h2>Take a look around</h2>
          <p className="lead">A short video from our campus.</p>
          <video className="ph" src="/videos/v18.mp4" controls preload="metadata"/>
          <img src="/images/playground.jpg" alt="School Playground" style={{borderRadius:'var(--r)', marginTop:'20px', width:'100%', objectFit:'cover'}}/>
        </div>
        <div>
          <h2>Visit us</h2>
          <p>Green City Layout, Chittapur Road,<br/>Yadgir, Karnataka</p>
          <p>School office: Monday to Saturday, 9:00 am – 4:00 pm.</p>
          <p><a href="tel:+917619320144">+91 76193 20144</a><br/><a href="tel:+919980510123">+91 99805 10123</a><br/><a href="mailto:cisyadgir@gmail.com">cisyadgir@gmail.com</a></p>
          <Link className="btn dark" to="/contact">Get directions</Link>
        </div>
      </div>
    </section>
  </>;
}
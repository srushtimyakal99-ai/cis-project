import Gallery from '../components/Gallery.jsx';

const facilities=[
  ['📚','Library','Reference books, story books and periodicals, with a weekly library period for every class.','library.jpg'],
  ['💻','Computer lab','Workstations with broadband, used for coding, projects and digital literacy.','computer-lab.jpg'],
  ['🖥️','Smart Classrooms','Interactive smart boards and modern technology to make learning engaging and visual.','classroom-tech.jpg'],
  ['🚌','Transport','Bus routes across Yadgir with a teacher or attendant on every trip.','school-buses.jpg'],
  ['🛡️','Safety & Security','CCTV-monitored premises, fire safety, and a secure campus environment.','campus-security.jpg'],
  ['⚽','Sports Ground','Cricket nets, volleyball court, kabaddi ground and a covered area for yoga and assembly.','playground.jpg'],
];

export default function Facilities(){
  return <>
    <section className="page-top"><div className="wrap">
      <h1>Facilities &amp; Gallery</h1>
      <p>Life on campus.</p>
    </div></section>
    
    <section><div className="wrap">
      <h2>Campus facilities</h2>
      <p className="lead">Everything below is on the same campus on Chittapur Road, so children never need to travel between sites.</p>
      
      <div className="grid">
        {facilities.map(([ic,t,d,img])=>(
          <div className="card" key={t} style={{display:'flex', flexDirection:'column', padding:'0', overflow:'hidden'}}>
            
            {/* This is the image box at the top of the card */}
            <div style={{width:'100%', height:'220px'}}>
              <img src={`/images/${img}`} alt={t} style={{width:'100%', height:'100%', objectFit:'cover'}} />
            </div>

            {/* This is the text below the image */}
            <div style={{padding:'20px'}}>
              <div className="ic" style={{fontSize:'2rem', marginBottom:'8px'}}>{ic}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>

          </div>
        ))}
      </div>
    </div></section>
    
    <section className="alt"><div className="wrap">
      <h2>Photo &amp; video gallery</h2>
      <p className="lead">Tap any photo or video to open it. Press Escape or tap outside to close.</p>
      <Gallery/>
    </div></section>
  </>;
}
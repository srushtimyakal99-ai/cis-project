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
      <h1>Facilities, Activities &amp; Gallery</h1>
      <p>Life on campus.</p>
    </div></section>
    
    <section><div className="wrap">
      <h2>Facilities</h2>
      <p className="lead">Everything below is on the same campus on Chittapur Road, so children never need to travel between sites.</p>
      
      <div className="grid">
        {facilities.map(([ic,t,d,img])=>(
          <div className="card" key={t} style={{display:'flex', flexDirection:'column', padding:'0', overflow:'hidden'}}>
            <div style={{width:'100%', height:'220px'}}>
              <img src={`/images/${img}`} alt={t} style={{width:'100%', height:'100%', objectFit:'cover'}} />
            </div>
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
      <h2>Activities &amp; events</h2>
      <p className="lead">Learning beyond the classroom.</p>
      <div className="grid">
        <div className="card">
          <h3>Annual Day</h3>
          <p>A grand celebration of our students' talents in dance, drama, and music. Held every year in December.</p>
        </div>
        <div className="card">
          <h3>Sports Week</h3>
          <p>A week dedicated to athletics, team sports, and physical fitness, culminating in our Annual Sports Day.</p>
        </div>
        <div className="card">
          <h3>Science Exhibitions</h3>
          <p>Students showcase their innovative science projects and working models to parents and judges.</p>
        </div>
        <div className="card">
          <h3>Debates</h3>
          <p>Regular debate and elocution competitions to build confidence, public speaking, and critical thinking.</p>
        </div>
        <div className="card">
          <h3>Quiz Competitions</h3>
          <p>Inter-house quizzes on general knowledge, science, and current affairs to encourage healthy competition.</p>
        </div>
        <div className="card">
          <h3>Cultural Activities</h3>
          <p>Celebrations of festivals, traditional days, and cultural events to keep students connected to their roots.</p>
        </div>
        <div className="card">
          <h3>Student Celebrations</h3>
          <p>Special assemblies and activities to celebrate Independence Day, Republic Day, and other national events.</p>
        </div>
      </div>
    </div></section>
    
    <section><div className="wrap">
      <h2>Photo &amp; video gallery</h2>
      <p className="lead">Tap any photo or video to open it.</p>
      <Gallery/>
    </div></section>
  </>;
}
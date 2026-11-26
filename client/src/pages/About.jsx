export default function About(){
  const stages=[
    ['Pre-primary','Pre-KG, LKG, UKG','Play-based learning, phonics, numbers, rhymes and motor skills.'],
    ['Primary','Grades I – V','English, Kannada/Hindi, maths, EVS, computers, art and physical education.'],
    ['Middle','Grades VI – VIII','Science, social science, third language, lab work and project-based learning.'],
    ['High school','Grades IX – X','Board-focused teaching, practice tests and career guidance.'],
  ];
  return <>
    <section className="page-top"><div className="wrap">
      <h1>About &amp; Academics</h1>
      <p>Who we are and how we teach.</p>
    </div></section>
    <section><div className="wrap">
      <h2>Our school</h2>
      <p className="lead">Centurion International School is an English-medium school in Yadgir, Karnataka, run by Margadarshana Education Trust (R). We combine a traditional emphasis on discipline and respect with a modern, activity-based classroom.</p>
      
      <div className="grid">
        <div className="card">
          <h3>Our vision</h3>
          <p>To empower every child with a strong foundation of knowledge, character, and critical thinking. We strive to create a learning environment that fosters compassion, creativity, and a lifelong love for learning, preparing our students to be responsible global citizens.</p>
        </div>
        <div className="card"><h3>Our mission</h3><p>Small classes, well-prepared teachers, honest assessment and a safe campus where parents are true partners.</p></div>
        <div className="card"><h3>Our values</h3><p>Respect, responsibility, curiosity and service — practised every day, not just written on a wall.</p></div>
      </div>

      <div className="card" style={{marginTop:'32px', borderLeft:'6px solid var(--gold)'}}>
        <h3>Chairman's Message</h3>
        <p style={{fontStyle:'italic', marginBottom:'16px'}}>
          "Welcome to Centurion International School. Our goal is not just to fill young minds with facts, but to ignite a passion for learning. We believe that true education goes beyond textbooks—it is about building character, instilling values, and preparing our children to face the challenges of tomorrow with confidence and integrity. We are committed to providing a safe, nurturing, and modern environment where every child can discover their unique potential."
        </p>
        <p><strong>- Sujatha Hoded, Chairman</strong></p>
      </div>

    </div></section>
    <section className="alt"><div className="wrap">
      <h2>Academics</h2>
      <p className="lead">Classes run from pre-primary to [Grade X], following the [State/CBSE] syllabus in English medium.</p>
      <div className="tbl"><table>
        <thead><tr><th>Stage</th><th>Grades</th><th>What learning looks like</th></tr></thead>
        <tbody>{stages.map(([s,g,d])=><tr key={s}><td>{s}</td><td>{g}</td><td>{d}</td></tr>)}</tbody>
      </table></div>
    </div></section>
    <section><div className="wrap">
      <h2>Assessment &amp; reporting</h2>
      <p className="lead">We use a mix of classwork, projects and term exams, and share progress with parents every term.</p>
      <details><summary>How often are exams held?</summary><p>Two term-end examinations plus regular unit tests. Results are discussed at the parent–teacher meeting that follows each term.</p></details>
      <details><summary>What is the school timetable?</summary><p>Classes run [8:45 am – 3:30 pm], Monday to Friday, with a Saturday half-day for [Grades VI and above].</p></details>
      <details><summary>Do you provide homework support?</summary><p>Teachers set graded homework and run a short after-school support session for students who need extra help.</p></details>
      <details><summary>Which languages are offered?</summary><p>English is the medium of instruction. Kannada and Hindi are taught, with [Sanskrit/Urdu] as the third language from Grade VI.</p></details>
    </div></section>
  </>;
}
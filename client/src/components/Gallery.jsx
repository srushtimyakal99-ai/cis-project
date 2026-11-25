import {useEffect,useState} from 'react';
const photos=[['campus','campus','School building'],['sports','sports-day','Annual Sports Day'],['sports','sports1','High School Sports Meet 2025-26'],
 ['events','event1','Students on stage with certificates'],['events','event2','Programme with flag and students in uniform'],['events','event3','Stage programme with guests'],
 ['events','event4','Students in costume at a celebration'],['events','event5','Ribbon cutting with students in costume']];
const filters=[['all','All'],['campus','Campus'],['sports','Sports'],['events','Events']];
export default function Gallery(){
  const [f,setF]=useState('all'),[big,setBig]=useState(null);
  useEffect(()=>{const k=e=>e.key==='Escape'&&setBig(null);addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[]);
  return <>
    <section id="gallery"><div className="wrap"><h2>Photo gallery</h2>
      <div className="filters">{filters.map(([k,t])=><button key={k} className={f===k?'on':''} onClick={()=>setF(k)}>{t}</button>)}</div>
      <div className="grid">{photos.filter(p=>f==='all'||p[0]===f).map(([c,i,a])=><div className="ph" key={i} onClick={()=>setBig([i,a])}><img src={`/images/${i}.jpg`} alt={a} loading="lazy"/></div>)}</div></div></section>
    <section className="alt"><div className="wrap"><h2>Videos</h2><div className="grid">
      {[18,19,20,21,22,23,24].map(i=><video key={i} controls preload="metadata" playsInline style={{width:'100%',borderRadius:14}}><source src={`/videos/v${i}.mp4`} type="video/mp4"/></video>)}</div></div></section>
    {big&&<div id="lb" className="open" onClick={()=>setBig(null)}><button aria-label="Close">×</button><div className="ph" onClick={e=>e.stopPropagation()}><img src={`/images/${big[0]}.jpg`} alt={big[1]}/></div></div>}
  </>;
}

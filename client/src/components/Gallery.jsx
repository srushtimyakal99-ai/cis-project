import {useEffect,useState} from 'react';

// Only the pool photo is included here now
const photos=['pool.jpg'];
const videos=['v18.mp4','v19.mp4','v20.mp4','v21.mp4','v22.mp4','v23.mp4','v24.mp4'];

const items=[
  ...photos.map(f=>({type:'photo',src:`/images/${f}`,label:'Swimming Pool'})),
  ...videos.map(f=>({type:'video',src:`/videos/${f}`,label:'School video '+f.replace(/\D/g,'')})),
];

export default function Gallery(){
  const [filter,setFilter]=useState('all'),[open,setOpen]=useState(null);
  useEffect(()=>{const k=e=>e.key==='Escape'&&setOpen(null);addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[]);
  const shown=items.filter(i=>filter==='all'||i.type===filter);
  return <>
    <div className="filters">
      {[['all','All'],['photo','Photos'],['video','Videos']].map(([k,t])=>
        <button key={k} className={filter===k?'on':''} onClick={()=>setFilter(k)}>{t}</button>)}
    </div>
    <div className="grid">
      {shown.map(i=><div key={i.src} className="ph" data-label={i.type==='photo'?i.label:''} role="button" tabIndex={0}
          onClick={()=>setOpen(i)} onKeyDown={e=>e.key==='Enter'&&setOpen(i)}>
        {i.type==='photo'
          ?<img src={i.src} alt={i.label} loading="lazy" onError={e=>e.currentTarget.remove()}/>
          :<span>▶ {i.label}</span>}
      </div>)}
    </div>
    <div id="lb" className={open?'open':''} onClick={()=>setOpen(null)}>
      <button aria-label="Close" onClick={()=>setOpen(null)}>×</button>
      {open&&(open.type==='photo'
        ?<div className="ph"><img src={open.src} alt={open.label}/></div>
        :<video className="ph" src={open.src} controls autoPlay/>)}
    </div>
  </>;
}
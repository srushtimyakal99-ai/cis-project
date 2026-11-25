// Small helper for talking to the backend
export async function api(url,method='GET',body){
  let r;try{r=await fetch(url,{method,headers:{'Content-Type':'application/json'},body:body&&JSON.stringify(body)})}
  catch{throw new Error('Cannot reach the server. Please try again later.')}
  const data=await r.json().catch(()=>({}));
  if(!r.ok)throw Object.assign(new Error(data.error||'Something went wrong.'),{status:r.status});
  return data;}

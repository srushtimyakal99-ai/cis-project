// Returns an object of error messages (empty object = all good)
export function validate(f,required){
  const e={};
  for(const k of required){const v=(f[k]||'').trim();
    if(!v)e[k]='This field is required.';
    else if(k==='phone'&&!/^[6-9]\d{9}$/.test(v.replace(/[\s+-]/g,'').replace(/^91(?=\d{10}$)/,'')))e[k]='Enter a valid 10-digit mobile number.';
    else if(k==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v))e[k]='Enter a valid email address.';
    else if(k==='name'&&v.length<2)e[k]='Enter your name.';}
  return e;}

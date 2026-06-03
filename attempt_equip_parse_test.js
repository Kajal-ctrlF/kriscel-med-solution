const fs = require('fs');
const s = fs.readFileSync('medical/equipment.html','utf8');
const m = s.match(/<script>([\s\S]*)<\/script>/);
if(!m){
  console.log('NO_SCRIPT_BLOCK');
  process.exit(0);
}
try{
  new Function(m[1]);
  console.log('JS_PARSE_OK');
}catch(e){
  console.log('JS_PARSE_ERROR');
  console.log(String(e.message||e));
  process.exit(1);
}


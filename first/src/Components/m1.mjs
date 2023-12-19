
//b c d can only be called by their names but s can be called by any name as it is a default export
import s, {b,c,d}from './m2.mjs';
console.log(s);
console.log(b);
console.log(c);
console.log(d);
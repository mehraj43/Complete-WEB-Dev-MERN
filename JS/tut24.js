console.log('Welcome to tut 24');

let today = new Date();
console.log(today);
console.log(typeof today);

let othDate = new Date('8-4-2003 04:54:08');
// othDate = new Date('June 13 1976');
// othDate = new Date('09/16/1976');
console.log(othDate);
let a = othDate.getDate();
a = othDate.getDay();
a = othDate.getMinutes();
a = othDate.getTime();
a = othDate.getMonth();
console.log(a);
othDate.setDate(23);
othDate.setMonth(0);
othDate.setFullYear(1900);
othDate.setMinutes(2);
othDate.setHours(1);
othDate.setSeconds(3);
console.log(othDate);

console.log('single');

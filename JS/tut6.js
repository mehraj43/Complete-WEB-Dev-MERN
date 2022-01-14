console.log("Welcome to tut6");
const name = 'Meraj';
const greeting = 'Good Morning Morning';
console.log(greeting[3]);
console.log(greeting.charAt(7));
console.log(greeting.indexOf('M'));
console.log(greeting.lastIndexOf('M'));
console.log(greeting.endsWith('g'));
console.log(greeting.endsWith('ning'));
console.log(greeting.endsWith('ming'));
console.log(greeting +' '+ name);
console.log(greeting.includes('morning'));
console.log(greeting.substring(1,3));
console.log(greeting.substr(2,5));//substr(a,b) where a is start index and b is number of elements 
console.log(greeting.slice(-4));
console.log(greeting.slice(0,4));
console.log(greeting.split(' '));
console.log(greeting.replace("Mor","Eve"));
console.log(greeting.sub());

// let fruit1 = 'Orange\'\"';   //to use single or double quotes to print use back-slash eveytime before a quote 
let fruit1 = `Orange'"`;
let fruit2 = 'Mango';
let myHtml = `Hello ${name}
              <h1>This is a headig</h1>
              <h2>You like ${fruit1} and 
              ${fruit2}</h2>`;
document.body.innerHTML = myHtml;


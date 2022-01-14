console.log("Welcome to tutorial 8");

let age = 17;
if(age==19){
    console.log("Age is 19");
}else{
    console.log("Age is not 19");
}

const marks = '79';
if(marks===79){
    console.log("Marks is 79");
}else{
    console.log("Marks is not 19");
}

let vari = undefined;
console.log(typeof vari);

if(typeof vari === 'undefined'){
    console.log("Vari is defined");
}else{
    console.log("Vari is not defined");
}

vari = 34;
console.log(typeof vari);

if(typeof vari === 'undefined'){
    console.log("Vari is defined");
}else{
    console.log("Vari is not defined");
}

if('1' == 1){
    console.log("Vari is defined",(Number('1') + 1));
}else{
    console.log("Vari is not defined");
}

let doesdrive = true;

if (doesdrive) {
    console.log("You can drive");
}else{
    console.log("You cannot drive");
}

if (doesdrive && age>=18) {
    console.log("You can drive");
}else{
    console.log("You cannot drive");
}

doesdrive = false;

if (doesdrive || age>=18) {
    console.log("You can drive");
}else{
    console.log("You cannot drive");
}

console.log(age==45? 'Age is 45 ': 'Age is not 45');

age = 87;
switch (age) {
    case 18:
        console.log("You are 18");
        break;
    case 19:
        console.log("You are 19");
    case 17:
        console.log("You are 17");
    default:
        console.log("Your age is not known");
        break;
}


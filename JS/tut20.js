console.log("Welcome to tut 20");

let veGies = ["adrak","pyaaz","bhindi"];

// Add a key-value pair inside localStorage
localStorage.setItem("Name","Harry");
localStorage.setItem("Name2","Malik");
localStorage.setItem("veget",veGies);
localStorage.setItem("vegetab",JSON.stringify(veGies));

// Clears the entire localStorage
// localStorage.clear();

// Cleat a particular key-value pair
// localStorage.removeItem("Name");

// Retrieve an item from localStorage
let names = localStorage.getItem("Name2");
names = localStorage.getItem("vegetab");
console.log(names);
names = JSON.parse(localStorage.getItem("vegetab"));
console.log(names);
console.log(typeof names);
console.log(names[2]);


sessionStorage.setItem("sessionName","sHarry");
sessionStorage.setItem("sessionName2","sMalik");
sessionStorage.setItem("sessionveget",veGies);
sessionStorage.setItem("sessionvegetab",JSON.stringify(veGies));

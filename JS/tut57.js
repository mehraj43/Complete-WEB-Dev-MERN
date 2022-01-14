console.log("This is tut 57 on Maps");

const myMap = new Map();

const key1 = "mystr", key2 = {}, key3= function(){};

//setting map values 
myMap.set(key1, "This is a string");
myMap.set(key2,"This is a blank obj");
myMap.set(key3,"This is an empty function")

console.log(myMap);

myMap.forEach((value, key)=>{
    console.log("Key is ", key);
    console.log("value is ", value);
})


for (const value of myMap.values()) {
    console.log(value);
}

let myarr = Array.from(myMap)
console.log(myarr);

for ( let [key,value] of myMap){
    console.log(key,value);
}


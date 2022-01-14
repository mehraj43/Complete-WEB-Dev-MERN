const fs = require('fs');
let text = fs.readFileSync('dele.txt', 'utf-8');

console.log('The content of the file is:');
console.log(text);

text = text.replace('Harry', 'Malik');
console.log('Creating a new file....');
fs.writeFileSync('Rohan.txt', text);

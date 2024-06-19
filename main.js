const input = require('sync-input');


let name = input();
let surname = input();
let message = input();
let numberOfRepeats = Number(input());

for (let i = 0; i < numberOfRepeats; i++) {
  console.log(`This is ${name} ${surname} and ${message}.`);
}
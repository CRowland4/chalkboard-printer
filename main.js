const input = require('sync-input');

let name = input();
let surname = input();
let message = input();

let i = 0;
while (i < 5) {
  console.log(`This is ${name} ${surname} and ${message}.`);
  i++;
}
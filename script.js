let donuts = [];

// Array of strings
let myDonuts = ['vanilla', 'chocolate', 'lavender', 'strawberry'];

// Array of numbers
let lottoNums = [23, 54, 89];

let lottoNum = 6;

let myDonut = myDonuts[2];

// Modify an array
myDonuts[1] = 'peppermint';

myDonuts[myDonuts.length] = 'greenTea';

myDonuts[6] = '';

// console.log(myDonuts.length);

/////////////////////////////
// Pushing and popping
////////////////////////////
let playlist = [
  'First Time Ever I Saw Your Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars',
];

playlist.push('My Heart Will Go On');
playlist.push('Song');

// pushing two values at once
playlist.push('Landslide', 'Donut song');
console.log(playlist);

let lastSong = playlist.pop();

// console.log(lastSong);

/////////////////////////////
// Shifting and Unshifting
////////////////////////////

let dishes = ['bowl'];
console.log(dishes);
// adding to the start
dishes.unshift('plate');
dishes.unshift('spoon');
console.log(dishes);
dishes.shift();
console.log(dishes);

/////////////////////////////
// Concatenating Arrays
////////////////////////////

let fruits = ['apple', 'banana'];
let veggies = ['brocolli', 'asparagus', 'brussel sprouts'];

let produce = fruits.concat(veggies);
console.log(produce);

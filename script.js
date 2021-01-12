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
// console.log(playlist);

let lastSong = playlist.pop();

// console.log(lastSong);

/////////////////////////////
// Shifting and Unshifting
////////////////////////////

let dishes = ['bowl'];
// console.log(dishes);
// adding to the start
dishes.unshift('plate');
dishes.unshift('spoon');
// console.log(dishes);
dishes.shift();
// console.log(dishes);

/////////////////////////////
// Concatenating Arrays
////////////////////////////

let fruits = ['apple', 'banana'];
let veggies = ['brocolli', 'asparagus', 'brussel sprouts'];

let produce = fruits.concat(veggies);
// console.log(produce);

// 1. Create an array to hold the years
// 2. Create a variable for the current year
// 3. Create 3-4 age variables -- (2021 - 1990)
// 4. In each of the age variables, subtract one of the years from the current year to get an age
// 5. Store the age variables inside an ages array. OR just do the step 4 calculations inside the ages array from the start.

// Years: 1990, 1967, 2002, 2010, 2018

let currYr = 2021;
let birthYears = [1990, 1967, 2002, 2010, 2018];

const age1 = currYr - birthYears[0];
const age2 = currYr - birthYears[1];
const age3 = currYr - birthYears[birthYears.length - 1];

// console.log(age1, age2, age3);

// const ages = [age1, age2, age3];

const ages = [currYr - birthYears[0], currYr - birthYears[1]];

// console.log(ages[0]);

/////////////////////////////
// Includes and Index Of
////////////////////////////

let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter',
];

// includes returns true or false
if (ingredients.includes('flour')) {
  //   console.log(`I'm Gluten Free can't eat that!`);
}

// indexOf return an index (or -1 if not found)
if (ingredients.indexOf('shrimp') !== -1) {
  //   console.log('Sorry, I hate shrimp');
}

/////////////////////////////
// Reverse and join
////////////////////////////

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];

// let reversed = letters.reverse();

let song = letters.reverse().join('');

// console.log(song);

/////////////////////////////
// slice
////////////////////////////

let animals = ['shark', 'salmon', 'whale', 'bigfoot', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3);

let mammals = animals.slice(3, 6);

// console.log(swimmers, mammals);

/////////////////////////////
// splice
////////////////////////////

let animals2 = ['shark', 'salmon', 'whale', 'bigfoot', 'lizard', 'tortoise'];
// console.log(animals2);

// splice(startIdx, delete, itemsToInsert)

// Inserting with splice
// //////
// at index 1, delete 0 items, and insert octopus
animals2.splice(1, 0, 'octopus');

// console.log(animals2);

// Deleting with splice
// //////
// At index 5, delete 2 items
animals2.splice(5, 2);
// console.log(animals2);

// Replacing with splice
// //////
// at index 3, delete 2 items, replace them with 'orca' and 'grizzly'

animals2.splice(3, 2, 'orca', 'grizzly');
// console.log(animals2);

/////////////////////////////
// sorting
////////////////////////////

let people = ['Mrs. Robinson', 'Jolene', 'Helon', 'Bob', 'Roxanne'];

people.sort();

let nums = [34, 10, 11, 67, 99];

nums.sort();

// console.log(nums);
// console.log(people);

//Sorts by converting values to strings and comparing their UTF-16 character codes.

/////////////////////////////
// nested Arrays
////////////////////////////

const animalPairs = [
  ['doe', ['buck', 'stag']],
  ['ewe', 'ram'],
  ['peahen', 'peacock'],
];

// console.log(animalPairs[0][1].push('kirsch'));

// console.log(animalPairs);

// /////////////////////////////
// reference types
/////////////////////////////

// Value Types

// Value types - the variable stores the actual value

let x = 100;
let y = x;

// if we change x
x = 99;
// y is unchanged
console.log(x, y);

// Array variables do not hold the actual array
// instead store a reference to the array

let nums2 = [2, 4, 6, 8];
let myNums = nums2; // myNums reference the same array(nums)

nums2.push('BOO');
console.log(myNums);

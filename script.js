"use strict"

console.log("hello world");

const country = "the Czech Republic";
const continent = "Europe";
let population = 10;

console.log(country, continent, population);

const isIsland = false;
const language = "czech";

console.log(typeof country, typeof continent, typeof population, typeof isIsland, typeof language);

console.log(population / 2);
// console.log(population ++);
console.log(population > 6);
console.log(population < 33);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

if (population < 33) {
    console.log(`${country}´s population is ${33-population} million below average.`);
} else {
    console.log(`${country}´s population is above average.`);
}

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143





function countDown(fromNumber) {
    for (let i = fromNumber; i > 0; i--) {
      console.log(i);
    }
  }
  
  countDown(3);

  function countDownNow(fromNumber) {
    console.log(fromNumber);
    if (fromNumber > 1) {
      countDownNow(fromNumber - 1);
    }
  }
  
  countDownNow(3);

  // ===========================================================================================================================

  // const numNeighbours = Number(prompt(
  //   'How many neighbour countries does your country have?'
  // ));

  // if (numNeighbours === 1) {
  //   console.log("Only 1 neighbour.");
  // } else if (numNeighbours > 1) {
  //   console.log("More than 1 border.");
  // } else {
  //   console.log("No border.");
  // }

  // =============================================================================================================================


//   Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

// If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.


  if (language === "english" && population < 50 && !isIsland) {
    console.log(`You should live in ${country}.`);
  } else {
    console.log(`${country} does not meet your criteria.`);
  }

// =================================================================================================================================

// Use a switch statement to log the following string for the given language:
// chinese or mandarin: 'MOST number of native speakers!';
// spanish: '2nd place in number of native speakers';
// english: '3rd place';
// hindi: 'Number 4';
// arabic: '5th most spoken language';
// for all other simply log 'Great language too :D'.

const lang = "english"; // lang protože language proměnnou už mám a nechce se mi měnit

switch (lang) {
  case "chinese":
    console.log("MOST number of native speakers!");
    break;
  case "mandarin": 
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
} 

// =======================================================================================================================================

// The Conditional (Ternary) Operator﻿
// If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". 
// Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

population >= 33 ? console.log(`${country}´s population is above average.`) : console.log(`${country}´s population is below average.`); 


// =======================================================================================================================================
// console.log("My Console statement!!");

// Datatype

// Syntax and declaration

// var score = 10;  // ES5 - Ecmascript

// let result = 50; // ES6 - Ecmascript 2015
// const PI = 3.14; // ES6 - Ecmascript 2015


// score = 15;
// result = 55;
// PI = 3.26;

// console.log(score);
// console.log(result);
// console.log(PI);



/** 
 *  Datatypes
 *  1. Number
 *  2. String
 *  3. Boolean
 *  4. Null
 *  5. Undefined
 *  6. Objects
 *  7. Symbol (ES6)
 *  
 *  Lossely Typed
*/




let score = 10; // Number
let result = '10'; // String 
// let result = 10; // Number 

//BEDMAS  (Bracket Exponent Divison Multiplication Addition Substraction)


let finalScore = score + result;    // Concatenating
let penalty = score - result;       // Mathematical
// let totalGame = '5';
let totalGame = 'five';
// let avgScore = finalScore / totalGame;

// //console.log(score, result);
// console.log(finalScore, penalty);
// console.log(avgScore);

// // typeof

// console.log(typeof finalScore);
// console.log(typeof penalty);

let value = (finalScore**2)*10/(penalty + totalGame)

// console.log(value);

// console.log(penalty + totalGame);
console.log(penalty * totalGame);


// console.log(value);  // Value = NaN  (not a number)


console.log(typeof value); // Number
// #5101ff#5101ff#5101ff   DAY 1  #5101ff#5101ff#5101ff
/*
console.log("Hello World!");

// Values
// Values are like booleans, strings, arrays, numbers...
23 + 24;
("this is a value");

// Variables
// They are containers for storing data
var firstName = "firstName";
let middleName = "middleName";
const lastName = "lastName";

console.log(firstName, middleName, lastName);

// Naming Convention
// Check MD file...
let x = 10;
let _name = "maydox";
let $ = "dollar";
const PI = 3.14;
*/
// ================================================================
// ================================================================

// #5101ff#5101ff#5101ff   DAY 2  #5101ff#5101ff#5101ff

// Data Types

// 1. Number
let x = 10;
let y = 10.11;
const PI = 3.14;
// 2. String
let fName = "firstName";
let singleLetter = "a";
// 3. Boolean
const booleanValueTrue = true;
const booleanValueFalse = false;
// 4. Undefined
let box;
let emptyString = "";
console.log(box);
console.log(emptyString);
console.log(typeof box);
console.log(typeof emptyString);

// 5. Null
let nullValue = null;
console.log(nullValue);
console.log(typeof nullValue);
// 6. Symbol
let sym = Symbol("I am symbol");
console.log(sym);
console.log(typeof sym);
// 7. BigInt
let bigNumber = 98766283283878232n;
let bigNumber1 = BigInt(479437957349579340);
console.log(bigNumber, bigNumber1);

// Dynamic Typing

let firstValue = 10;
console.log(typeof firstValue);
console.log(firstValue);
firstValue = "newValue";
console.log(firstValue);
console.log(typeof firstValue);

// Let, Var and Const
// Old way
var thisIsOld = "I am old";

// New ways
let newWays = "I am new";
// const requires Initial value..
const newWayPermanent = "I can't be changed";

// In javaScript u can initilize variables even without using let, var or const
iAmVariable = "This is variable declaration";

// NOTE: But doing so will create a property in the gloabal scope.

// Operators
// Arithmetic Operators
2 + 5;
5 - 3;
5 * 5;
2 ** 2;
10 / 5;
20 % 2;
let incrementing = 20;
incrementing++;
console.log(incrementing);
++incrementing;
console.log(incrementing);
let decrementing = 20;
decrementing--;
console.log(decrementing);
--decrementing;
console.log(decrementing);

// Assignment operators
let assignment = 10;
console.log(assignment);
assignment += 20;
console.log(assignment);
assignment -= 20;
console.log(assignment);
assignment *= 20;
console.log(assignment);
assignment /= 20;
console.log(assignment);
assignment %= 20;
console.log(assignment);
assignment **= 2;
console.log(assignment);

// Comparision Operators
20 == "20";
20 === "20";
20 != "20";
20 !== "20";
20 > 20;
20 < 20;
20 >= 20;
20 <= 20;

// Logical Operators
true && false;
false || false;
!false;

// Bitwise Operators
0101 & 0010;
0011 | 0101;
~5;
5 ^ 6;
5 << 6;
5 >> 2;
5 >>> 2;
// ================================================================
// ================================================================
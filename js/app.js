"use strict";

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
/*
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

*/
// #5101ff#5101ff#5101ff   DAY 3  #5101ff#5101ff#5101ff
/*
// String
let string1 = "'This is a string in double quotes";
let string2 = '"This is a string in single quotes';

// Tempelate Literal Modern way

let modernStringCreation = `This is the modern way of creating string's.`;

// Typer conversion and coercion
// Conversion ---> Explicit
let number1 = "21";
console.log(Number(number1));

// Implicit
let number2 = 10;
let number3 = number2 + number1;
console.log(number3);

// MultiLine String
// old way
let oldWayMultiLine = "This is first line \n\
this is second line \n ";
// New way
let newWayMultiLine = `This is first line
this is second line `;

// If-Else

let age = 18;
if (age > 18) {
	console.log("Eligible for Voting...");
} else {
	console.log("Not Eligible for voting...");
}

// Else if

let guess = 10;
if (guess === 10) {
	console.log("Correct Guess...");
} else if (guess < 10) {
	console.log("Guess a little Higher...");
} else {
	console.log("Guess a little Lower");
}

// Short Cut for emoji win + .

// falsy values in js 0, '' , udefined, null, NaN

// Equality operators
// Loose Equality check
console.log("5" == 5);
// Strict Equality check
console.log("5" === 5);
// Difference Check
//  != and !==

// Prompt
prompt("Enter Something");

// Boolean Logics AND, OR and NOT for more check md file..
console.log(true && true);
console.log(true || true);
console.log(!true);
*/
// ================================================================
// ================================================================

// #5101ff#5101ff#5101ff   DAY 4  #5101ff#5101ff#5101ff

// Switch Statement
/*
let val = 12;
switch (val) {
	case 0:
		console.log("Value is 0");
		break;
	case 1:
		console.log("Value is 1");
		break;
	case 2:
		console.log("Value is 2");
		break;
	case 3:
		console.log("Value is 3");
		break;
	case 4:
		console.log("Value is 4");
		break;
	case 5:
		console.log("Value is 5");
		break;
	case 6:
		console.log("Value is 6");
		break;
	case 7:
		console.log("Value is 7");
		break;
	case 8:
		console.log("Value is 8");
		break;
	case 9:
		console.log("Value is 9");
		break;
	default:
		console.log("Wrong Input!");
}

//  Statement

if (10 > 4) {
	console.log("10 is greater....");
}

// Expression

20 + 5;

// Ternary Operator
let day = 12;
let study = day > 32 ? "Not Study" : "Defenitely Not Study";
console.log(study);
*/
// ================================================================
// ================================================================

// #5101ff#5101ff#5101ff   DAY 5  #5101ff#5101ff#5101ff
/*
// Function

// Function Declaration
function randomNumber(number) {
	let num = Math.floor(Math.random() * number);
	return num;
}
// console.log(randomNumber(10));
function enterNumber(number) {
	let num = randomNumber(number);
	let num1 = Math.floor(Math.random() * num);
	return num1;
}

// console.log(enterNumber(10));

//  Functionn Expression

let num1 = function (number) {
	return number;
};

let num2 = function (number) {
	return number;
};

let addition = function (n, m) {
	let number1 = num1(n); //function calling other function
	let number2 = num1(m);
	return number1 + number2;
};

console.log(addition(3, 4));

// Arrow Function

function subtraction(num1, num2) {
	// Parameters
	return num1 - num2;
}
console.log(subtraction(10, 5)); // Arguments

let multiplication = (num1, num2) => num1 * num2;

console.log(multiplication(10, 2));
*/

// ================================================================
// ================================================================

// #5101ff#5101ff#5101ff   DAY 6 #5101ff#5101ff#5101ff
/*
// Array
// It is a hetrogeneours collection of items.

let arr1 = ["spiderMON", "superMON", "batMON"];
let arr2 = new Array("Chota Bheem", "Mighty Raju", "Sinchan");
console.log(arr1, arr2);

// Retriving Data from Array

console.log(arr1[0]);
console.log(arr1[arr1.length - 1]);

// Array Index Starts from 0 to n-1
// Array Length Starts from 1 to n

// Length

console.log(arr1.length);

// Array operations(Methods)
// Adding
// add at the end of array
arr1.push("shaktiMON");
console.log(arr1);
// add at the beginning of the array
arr1.unshift("huMON");
console.log(arr1);

// Removing
// remove from the end of the array
arr1.pop();
console.log(arr1);
// remove from the start of the array
arr1.shift();
console.log(arr1);

// Searching / Indexing
//  Old way
console.log(arr1.indexOf("spiderMON"));
console.log(arr1.indexOf("batMON"));
console.log(arr1.indexOf("doreaMON"));

// New way
console.log(arr1.includes("spiderMON"));
console.log(arr1.includes("batMON"));
console.log(arr1.includes("doreaMON"));

*/

// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 7 #5101ff#5101ff#5101ff
/*
// Object Syntax
let employeeData = {
	id: "r1913318",
	firstName: "Bishal",
	lastName: "Adhikari",
	birthYear: 2001,
	calAge: function (currentYear) {
		return currentYear - this.birthYear;
	},
};

console.log(employeeData);

// Retriving Data using dot and bracket notation
console.log(employeeData.firstName);
console.log(employeeData["lastName"]);

// Object Methods (functions)

let objectMethod = {
	generateRandom: function (number) {
		return Math.floor(Math.random() * number) + 1;
	},
};

console.log(objectMethod.generateRandom(10));

// this Keyword

let thisKeyword = {
	firstName: "bishal",
	lastName: "adhikari",
	addFirstLast: function () {
		return `${this.firstName} ${this.lastName}`;
	},
};
console.log(thisKeyword.addFirstLast());

// Iterations
// For loop with break

for (let i = 1; i <= 10; i++) {
	if (i === 5) break;
	console.log(i);
}

// While Loop with continue and looping backwards

let j = 11;
while (j > 1) {
	j--;
	if (j === 5) continue;
	console.log(j);
}

// Nested loops
let string = "";
function pattern(num) {
	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num; j++) {
			string += "*";
		}
		string += "\n";
	}
}
pattern(5);
console.log(string);
*/
// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 8 #5101ff#5101ff#5101ff

// Console variants
let person = {
	firstName: "bishal",
	lastName: "adhikari",
	age: 21,
};
console.table(person);
console.error(person.firstName);
console.warn(person.lastName);

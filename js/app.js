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
/*
// Console variants
let person = {
	firstName: "bishal",
	lastName: "adhikari",
	age: 21,
};
console.table(person);
console.error(person.firstName);
console.warn(person.lastName);
*/

// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 10 #5101ff#5101ff#5101ff

document.querySelector(".container").addEventListener("click", function () {
	document.querySelector(".container").style.backgroundColor = "black";
	document.querySelector("#heading").style.color = "white";
	document.querySelector("#heading").innerHTML = "You Clicked Me";
});

// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 11 #5101ff#5101ff#5101ff

document.querySelector(".click-me").addEventListener("click", function () {
	document.querySelector(".display").classList.toggle("hidden");
});

// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 14 #5101ff#5101ff#5101ff
/*
// Scope chain

// Global variable
const PI = 3.14;

function circleArea() {
	// Local Variable
	const r = 5;
	return 2 * PI * r;
}

console.log(circleArea());

// Hoisting possible in function declaration
console.log(addTwo(5, 2));

function addTwo(a, b) {
	return a + b;
}

// Function expression and arrow funtion
// Reference error
// console.log(addThree(3, 2, 4));
const addThree = function (a, b, c) {
	return a + b + c;
};

// ReferenceError
// console.log(addArrow(5, 5));
const addArrow = (a, b) => a + b;

// Type error since var gives undefined
// console.log(addArrow1(4, 5));
var addArrow1 = (a, b) => a + b;
*/
// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 15 #5101ff#5101ff#5101ff

// Regular functions vs Arrow functions
// Regular functions gets its own this keyword where as arrow function does not get its own this keyword
/*
const employee = {
	id: "a123",
	firstName: "bishal",
	lastName: "adhikari",
	regularFun() {
		console.log(
			"This is normal function here this references to the current calling object.",
		);
		console.log(`I am ${this.firstName} ${this.lastName}`);
	},
	arrowFun: () => {
		console.log(
			"This is arrow function here this reference to the parent element",
		);
		console.log(`I am ${this.firstName} ${this.lastName}`);
	},
};

// employee.regularFun();
// employee.arrowFun();

const employee1 = {
	id: "a123",
	firstName: "bishal",
	lastName: "adhikari",
	regularFun() {
		console.log(
			"This is normal function here this references to the current calling object.",
		);
		console.log(`I am ${this.firstName} ${this.lastName}`);
		let arrowFun = () => {
			console.log("This is arrow function inside another function.");
			console.log(`I am ${this.firstName} ${this.lastName}`);
		};
		arrowFun();
	},
};

// employee1.regularFun();
// employee1.arrowFun();

// Reading from one function to another
// const normalFunction = {
// 	fName: "first",
// 	lName: "last",
// 	firstFunction() {
// 		console.log(`This is first function`);
// 		console.log(`${this.fName} ${this.lName}`);

// 		let secondFunction = function () {
// 			console.log("This is second function");
// 			console.log(`${this.fName} ${this.lName}`);
// 		};
// 		secondFunction();
// 	},
// };

// normalFunction.firstFunction();

const normalFunction1 = {
	fName: "first",
	lName: "last",
	firstFunction() {
		console.log(`This is first function`);
		console.log(`${this.fName} ${this.lName}`);

		let self = this;
		let secondFunction = function () {
			console.log("This is second function");
			console.log(`${self.fName} ${self.lName}`);
		};
		secondFunction();
	},
};

normalFunction1.firstFunction();
*/

// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 16 #5101ff#5101ff#5101ff
/*
const orangeJuice = {
	id: "a123",
	quantity: 1,
	type: "Orange Juice",
	mix: ["orange", "milk", "sugar", "water"],
	makeJuice() {
		console.log("");
	},
};

const [a, b, c, d] = orangeJuice.mix;
console.log(a, b, c, d);

// Nested Array Destructuring
const nestedArray = [2, 3, [1, 5]];
const [x, , [y, z]] = nestedArray;
console.log(x, y, z);

// Destructuring with default values

const arrayDefault = ["a", "b"];
const [m, n, o = "c"] = arrayDefault;
console.log(m, n, o);

// Destructuring objects
const { id, type, mix } = orangeJuice;
console.log(id, type, mix);

// Mutating variables

let { quantity } = orangeJuice;
console.log(quantity);

// Nested objects
let obj1 = {
	first: "bishal",
	about: {
		age: "21",
		gender: "male",
	},
};

const {
	first,
	about: { age, gender },
} = obj1;
console.log(first, age, gender);
*/
// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 17 #5101ff#5101ff#5101ff
/*
// spread operator
let spreadArray = [1, 2, 3, 4, 5];
console.log(...spreadArray);

// Creates a shallow copy
let spreadCopy = [...spreadArray];
console.log(spreadCopy);

// Iterables: String, arrays, maps, sets
// Strings
const naming = "JavaScript";
console.log(...naming);
// Arrays
const arr = ["a", "b", "c", "d", "e"];
console.log(...arr);

// Does not work in tempelete literals

// console.log(`${...spreadArray}`);

// Simple addition
function calculator(...numbers) {
	if (numbers.length > 0) {
		let sum = 0;
		for (let i = 0; i < numbers.length; i++) {
			sum += numbers[i];
		}
		return sum;
	}
}
console.log(calculator(2, 3, 6, 8));
*/
// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 18 #5101ff#5101ff#5101ff
/*
// Short circuting
// || returns if true
let number = 10;
let newNumber = number || 5;
console.log(newNumber);

let number1 = 0;
let newNumber1 = number1 || 20;
console.log(newNumber1);

// Multiple values
console.log("" || null || undefined || "name");

// && returns if false
let number2 = 10;
let newNumber2 = number2 && 30;
console.log(newNumber2);

// ?? returns except null and undefined
let number3 = 0;
let newNumber3 = number3 ?? 10;
console.log(newNumber3);

// logical assignment
let fName = "";
fName ||= "bishal";
console.log(fName);

let mName = 0;
mName &&= "bishal";
console.log(mName);

let lName = "";
lName ??= "bishal";
console.log(lName);
*/

// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 19 #5101ff#5101ff#5101ff
/*
let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
// 	console.log(day);
// }

let obj = {
	weekdays: {
		day: ["mon", "tue", "wed", "thu", "fri"],
	},
	weedends: {
		day: ["sat", "sun"],
	},
};

for (const [week, day] of Object.entries(obj)) {
	console.log(week, day[`day`]);
}

// Object chaining

console.log(obj.weedends?.day[0]);

// Object.Keys and Object.value
// console.log(Object.keys);
for (const key of Object.keys(obj)) {
	console.log(key);
}

for (const value of Object.values(obj)) {
	console.log(value);
}
*/
// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 20 #5101ff#5101ff#5101ff
/*
// Sets
// Collections of unique values
// It can hold any value of any data type
const fName = "Bishal";
const lName = "Adhikari";
let nameSet = new Set([...fName]);
console.log(nameSet);
for (const i of lName) {
	nameSet.add(i);
}

console.log(nameSet.values());
let fullName = "";
for (const item of nameSet) {
	fullName += item;
}
console.log(fullName);

console.log(typeof nameSet);
console.log(nameSet instanceof Set);

nameSet.delete("i");
console.log(nameSet);

console.log(nameSet.has("i"));
console.log(nameSet.has("B"));

console.log(nameSet.size);

nameSet.clear();
console.log(nameSet);

// Maps Holds key value paris where key can be any datatype

const mapping = new Map();
mapping.set("name", "bishal").set("age", 21).set("profession ", "Jobless");
console.log(mapping);

for (const key of mapping.keys()) {
	console.log(key);
}

for (const values of mapping.values()) {
	console.log(values);
}

for (const [key, value] of mapping.entries()) {
	console.log(key, value);
}

// Other way of creating map
const map1 = new Map([
	[1, "knight"],
	["age", 24],
	["profession", "Gamer"],
	[true, "false"],
]);
console.log(map1);

console.log(map1.get(1));

console.log(map1.size);

map1.delete(1);
console.log(map1);

console.log(map1.has("age"));

console.log(typeof map1);
console.log(map1 instanceof Map);

map1.clear();
console.log(map1);
*/
// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 21 #5101ff#5101ff#5101ff
/*
const playString = function (str) {
	const val = str;
	console.log(val.length);
	console.log(val.indexOf("i"));
	console.log(val.lastIndexOf("i"));
	console.log(val.slice(0, 6));
	console.log(val.toUpperCase());
	console.log(val.toLowerCase());
	console.log(val.trim());
	console.log(val.replace("i", "d"));
	console.log(val.replaceAll("i", "d"));
	// old method of replace all
	console.log(val.replace(/d/g, "i"));
	// startsWith and endsWith returns true if found or else false
	console.log(val.startsWith("Bish"));
	console.log(val.startsWith("ish"));

	console.log(val.endsWith("al"));
	console.log(val.endsWith("ri"));

	// Split and join method
	console.log(val.split(" "));
	console.log(val.split(" ").join("-"));

	// PadStart and PadEnd
	console.log(val.padStart(20, "o "));
	console.log(val.padEnd(20, "o "));
	console.log(val.padStart(30, "0 ").padEnd(50, " 0"));

	console.log(val.repeat(3));
};
playString("Bishal Adhikari");

const aeroplane = {
	id: "1232123",
	planeName: "Air India",
	path: "Bangalore-Lucknow",
	timings: "6:00-8:30",
	seat: "12B",
	lugages: "3Bags",
};

const plane = function (values) {
	const aray = [];
	for (const val of Object.values(values)) {
		aray.push(val);
	}
	// console.log(aray);
	console.log(
		`Your flight ${aray[1]} with ID ${aray[0]} is schedulde from ${
			aray[2].split("-")[0]
		} to  ${aray[2].split("-")[1]}  from ${aray[3].split("-")[0]}pm - ${
			aray[3].split("-")[1]
		}pm and your seat Number is ${aray[4]} with ${aray[5]}.`,
	);
};
plane(aeroplane);
*/
// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 22 #5101ff#5101ff#5101ff

const employee = {
	id: "121",
	fName: "ritesh",
	age: 32,
};

const displayEmployee = function (id, fName, age = 30) {
	console.log(id, fName, age);
};
displayEmployee(employee);
displayEmployee("111", "rakesh");
displayEmployee("321", "ram");

// ES5 way of declaring default values
const add = function (num1, num2) {
	num2 = num2 || 1; // ES5 way
	console.log(num1 + num2);
};
add(21, 22);
add(59);

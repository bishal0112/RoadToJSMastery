// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 23 #5101ff#5101ff#5101ff
/*
// Capitalize first letter from word or a sentence.
const capitalizeFirstLetter = function (letter) {
	const [firstLetter, ...rest] = [...letter];
	const finalWord = firstLetter.toUpperCase() + rest.join("");
	return finalWord;
};

console.log(capitalizeFirstLetter("bishal is awsome"));

// Higher Order Functions

const higerOrder = function (str, fn) {
	console.log(fn.name);
	return fn(str);
};

console.log(higerOrder("a bishal ", capitalizeFirstLetter));

// Function Returning another function
const message = function (message) {
	return function (person) {
		console.log(`${message} ${person}`);
	};
};

console.log(message());
const newfun = message("Hello how are you!");
newfun("Bishal");

message("Nice meeting you!")("Bishal");

// Greeting randomly with either HI , HELLO , Hey

const greetingMessages = ["Hi", "hello", "hey"];

const randomNum = () => {
	return Math.trunc(Math.random() * 3);
};

const greet = function (message) {
	return function (person) {
		console.log(
			`${capitalizeFirstLetter(message[randomNum()])} ${capitalizeFirstLetter(
				person,
			)} `,
		);
	};
};
greet(greetingMessages)("bishal");
greet(greetingMessages)("Knight");

// Call and apply Method
// Used for assigning the this keyword to the calling method

const vishwasFirstCompany = {
	owner: "Vishwas",
	companyName: "Vishwas and Daughters",
	companyType: "Multi National Company",
	branches: 4,
	display() {
		console.log(
			`${this.companyName} is a ${this.companyType} owned by ${this.owner}`,
		);
	},
};

vishwasFirstCompany.display();

const vishwasSecondCompany = {
	owner: "Vishwas",
	companyName: "Vishwas Tools",
	companyType: "Multinational Company",
	branches: 10,
};

const vishwasThirdCompany = {
	owner: "Vishwas",
	companyName: "Vishwas Maker",
	companyType: "National Company",
	branches: 10,
};
const vishwasFourthCompany = {
	owner: "Vishwas",
	companyName: "Vishwas Water Park",
	companyType: "Global Company",
	branches: 10,
};
const vishwasFifthCompany = {
	owner: "Vishwas",
	companyName: "Vishwas MOMOs",
	companyType: "Local Company",
	branches: 10,
};

const vishwasCompanies = [
	vishwasFirstCompany,
	vishwasSecondCompany,
	vishwasThirdCompany,
	vishwasFourthCompany,
	vishwasFifthCompany,
];

vishwasFirstCompany.display.call(vishwasSecondCompany);

// using apply (accepts a array)
vishwasFirstCompany.display.apply(vishwasCompanies[4]);
for (const i of vishwasCompanies) {
	vishwasFirstCompany.display.call(i);
}

// Bind

const obj = {
	work: "student",
	place: "Bangalore",
	greeting(fName, age) {
		console.log(
			`${fName} of ${age} years is a ${this.work} from ${this.place}.`,
		);
	},
};

obj.greeting("bishal", 21);

const obj1 = {
	work: "Developer",
	place: "Canada",
};
// obj1.greeting();
const obj1greet = obj.greeting.bind(obj1);

// call
obj.greeting.call(obj1, "Dih", 22);
// bind
obj1greet("bishal", 21);
*/
// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 24 #5101ff#5101ff#5101ff

// IIFE Immediately invoked function expression
(function () {
	console.log("I will run only once");
})();
// arrow function
(() => {
	console.log("I am a arrow function I will run only once");
})();

// Closures
// It's like when a function is born it keeps memory of all the things and can use them later.
// You cannot access closure properties but only see it happening

const closureMagic = function () {
	const a = 25;
	return function (num) {
		console.log(num * a);
	};
};
closureMagic()(10);
console.dir(closureMagic());

// Simple array methods
const arr = [];
for (let i = 0; i < 50; i++) {
	if (i % 5 === 0) {
		arr.push(i);
	}
}
// slice does not mutate original array
console.log(arr.slice(1));
console.log(arr);

// It mutates original array
console.log(arr.splice(2, 4));
console.log(arr);

console.log(arr.reverse());

console.log(arr.concat(..."bishal"));

const arr1 = [..."JavaScript"];
console.log(arr.join(" * "));

// at()<-- to get a element old way -->[]

console.log(arr1.at(-1)); //It returns the last element
console.log(arr1[-1]); // This does not give the last element it returns undefined

// ForEach method
const marvaleCharacters = ["hulk", "Iron Man", "Thor", "Spider Man"];

marvaleCharacters.forEach(function (char, index, array) {
	console.log(char, index, array);
});

// _ use an underscore to skip properties
marvaleCharacters.forEach(function (char, _, array) {
	console.log(char, array);
});

// 2 Tables
const twoTable = function (table = 2) {
	const box = document.querySelector(".box");
	box.innerHTML = " ";
	for (let i = 1; i <= 10; i++) {
		const html = ` <span>${table} </span> * <span>${i}</span> = <span>${
			table * i
		}</span> <br>`;
		box.insertAdjacentHTML("beforeend", html);
	}
};

twoTable(7);

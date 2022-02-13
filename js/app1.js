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
/*
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
*/
// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 25 #5101ff#5101ff#5101ff
/*
// Map Method
// Same as filter but it creates a new array
// Its parameters value, index, array
const bookPrices = [200, 100, 800, 350, 120, 666, 121, 921, 572, 234, 412];

const mapArr = bookPrices.map(function (bookPrice) {
	if (bookPrice < 500) {
		return `Book Under 500: ${bookPrice}`;
	} else {
		return `Book Above 500: ${bookPrice}`;
	}
});
console.log(mapArr);
console.log("-------------------------");
// forEach does not create new array
const forEachArr = bookPrices.forEach(function (bookPrice) {
	if (bookPrice < 500) {
		return `Book Under 500: ${bookPrice}`;
	} else {
		return `Book Above 500: ${bookPrice}`;
	}
});

console.log(forEachArr);

// Filter
// Used to filter array and return new filtered array
const filterArr = bookPrices.filter(function (bookPrice) {
	return bookPrice < 500;
});
// using arrow function
const filterArrow = bookPrices.filter((bookPrice) => bookPrice > 500);

console.log(filterArr);
console.log(filterArrow);
// Reduce
// Reduces the array and returns a single value
const reduceArr = bookPrices.reduce(function (acc, bookPrice) {
	const final = acc + bookPrice;

	return final;
}, 0);
console.log(reduceArr);

// Hiding Curse Words

const text = `Hello there idiot i wanted to let you know that you are very good but some times you can be a pain in the ass and get mad so try controling you talks.`;
const curseWords = ["ass", "mad", "idiot"];
const hideCurseWord = function (para) {
	let paragraph = para.toLowerCase().split(" ");
	const curseFree = paragraph.map(function (paraWord) {
		for (const curseWord of curseWords) {
			if (paraWord === curseWord) {
				const wordLength = [...curseWord].length;
				return "*".repeat(wordLength);
			}
		}
		return paraWord;
	});
	return curseFree.join(" ");
};
console.log(hideCurseWord(text));
*/
// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 26 #5101ff#5101ff#5101ff
/*
// Chaining methods
const datas = [
	200, 212, 321, -1232, 2312, 123, 11, -232, 123, 3434, -5923, -23423,
];

console.log(datas.filter((val) => val > 0).reduce((acc, val) => acc + val, 0));

// find method
const newData = datas.find(function (val) {
	return val > 0;
});
console.log(newData);
// Find Index
console.log(
	datas.findIndex(function (val) {
		return val > 3434;
	}),
);

// some and every
const someData = datas.some((mov) => mov > 10);
console.log(someData);

const everyData = datas.every((mov) => mov > 0);
console.log(everyData);

// flat and flatMap
const matrix = [1, [2, 3, 4, [5, 6, 7], 8, 9], 10, 11, 12, [13, 14, 15]];

console.log(matrix.flat(2));

// flatMap is a combination of flat and map
*/

// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 27 #5101ff#5101ff#5101ff
/* 
const names = [
	"naruto",
	"luffy",
	"goku",
	"saitama",
	"remaru",
	"veldora",
	"baki",
	"gon",
	"killiua",
	"zoro",
	"ichigo",
];

names.sort();
console.log(names);

const ascending = [221, -1232, 122, 2122, -4943, 94584, 2384, 9039, -3434];
// sort works with keeping alphabet in mind
ascending.sort();
console.log(ascending);
ascending.sort((a, b) => a - b);
console.log(ascending);

// fill method
const newArr = new Array(10);
newArr.fill(1);
console.log(newArr);

// Array.from()

console.log(Array.from("ABCDEFGH"));
*/

// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 28 #5101ff#5101ff#5101ff

//  converting numbers
const num = "31";
console.log(Number(num));
console.log(num);
console.log(+num);

// Parsing
// number ending with string can be parsed
// Number starting with string cannot be parsed

const remUnit = "3.2rem";
console.log(parseInt(remUnit));
console.log(parseFloat(remUnit));

// isNan
console.log(isNaN(20));
console.log(isNaN(remUnit));

// infinity
console.log(typeof Infinity);
console.log(typeof NaN);

console.log(Number.isInteger(29));
console.log(Number.isInteger("29"));

// Some math functions
console.log(Math.sqrt(25));

// to find cube root
console.log(8 ** (1 / 3));

console.log(Math.max(12, 22, 22, 33, 12));
console.log(Math.min(12, 34, 1, 43, 12, 433));

console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(-123));
console.log(Math.pow(5, 3));

console.log(Math.floor(Math.random() * 6) + 1);

console.log(Math.trunc(23.23));
console.log(Math.ceil(23.23));
console.log(Math.floor(23.23));

console.log((234.232).toFixed(2));
// remainder operator %
console.log(31 % 3);

// Date object
const date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getUTCDay());
console.log(date.getMonth());
console.log(date.getTimezoneOffset());
console.log(date.getMilliseconds());
console.log(date.toLocaleDateString());

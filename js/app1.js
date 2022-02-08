// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 23 #5101ff#5101ff#5101ff

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

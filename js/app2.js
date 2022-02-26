// New Start
// ================================================================
// ================================================================
// #5101ff#5101ff#5101ff   DAY 1 #5101ff#5101ff#5101ff

// #5101ff#5101ff#5101ff   DAY 5 #5101ff#5101ff#5101ff

// Implementing classes using constructor function and new keyword

const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
};

const bishal = new Person("Bishal", 2001);
console.log(bishal);

// #5101ff#5101ff#5101ff   DAY 6 #5101ff#5101ff#5101ff

Person.prototype.calAge = function (b) {
	console.log(this);
	return 2022 - b;
};

console.log(bishal.calAge(2001));

console.log(bishal.__proto__);

// Prototypal Inheritance and the prototype chain on built in objects

const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.magic = function () {
	return [];
};

arr.magic();
console.log(arr.magic());

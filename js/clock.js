const hourHand = document.getElementById("hour_hand");
const minHand = document.getElementById("min_hand");
const secHand = document.getElementById("second_hand");

function currentTime() {
	hourHand.innerText = " ";
	minHand.innerText = " ";
	secHand.innerText = " ";
	let date = new Date();
	let hour = date.getHours() - 12;
	let minute = date.getMinutes();
	let second = date.getSeconds();
	hourHand.innerText += String(hour).padStart(2, 0);
	minHand.innerText += String(minute).padStart(2, 0);
	secHand.innerText += String(second).padStart(2, 0);
	console.log(hour, minute, second);
	let t = setTimeout(function () {
		currentTime();
	}, 1000);
}
currentTime();

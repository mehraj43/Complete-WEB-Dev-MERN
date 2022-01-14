console.log('This is tut 61 on wall clock');

function updateClock() {
	// get the current date/time
	const currenTime = new Date();

	//extracr hour,minute and seconds
	let currenHour = currenTime.getHours();
	let currenMinutes = currenTime.getMinutes();
	let currenSeconds = currenTime.getSeconds();

	// pad 0 if minutes and seconds is less than 10 (single digit)
	currenMinutes = (currenMinutes < 10 ? '0' : '') + currenMinutes;
	currenSeconds = (currenSeconds < 10 ? '0' : '') + currenSeconds;

	// convert railway clocl to AM/PM clock
	currenHour = currenHour > 12 ? currenHour - 12 : currenHour;
	currenHour = currenHour == 0 ? 12 : currenHour;

	// choose AM/PM as per the time of the day
	const timeofDay = currenHour < 12 ? 'AM' : 'PM';

	// prepare the time string from hours,minutes and seconds
	const currenTimeStr =
		currenHour + ':' + currenMinutes + ':' + currenSeconds + ' ' + timeofDay;

	// insert the timestring inside the DOM
	document.getElementById('clock').innerHTML = currenTimeStr;
}

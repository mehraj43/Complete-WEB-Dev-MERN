console.log('This is tut 54 on alarm');
const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

const audio = new Audio(
	'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'
);


// function to play alarm ringtone
const ringbell = () => {
	audio.play();
};

// This function will run whenever alarm is set from UI
function setAlarm(e) {
	e.preventDefault();
	const alarm = document.getElementById('alarm');
	let alarmDate = new Date(alarm.value);
	console.log(`setting alarm for ${alarmDate}....`);
	let nowDate = new Date();
	let timeTOAlarm = alarmDate - nowDate;
	console.log(timeTOAlarm);
	if (timeTOAlarm >= 0) {
		setTimeout(() => {
			console.log('Ringing Now');
			ringbell();
		}, timeTOAlarm);
	}
}

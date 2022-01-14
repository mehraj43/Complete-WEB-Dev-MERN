console.log('This is tut on CV screener ');

// array of objects
const data = [
	{
		name: 'Rohan Das',
		age: 18,
		City: 'kolkata',
		language: 'JS',
		framework: 'React',
		image: 'https://randomuser.me/api/portraits/men/75.jpg',
	},
	{
		name: 'Shubham Sharma',
		age: 28,
		City: 'Bangalore',
		language: 'Python',
		framework: 'Django',
		image: 'https://randomuser.me/api/portraits/men/55.jpg',
	},
	{
		name: 'Kamila Kabilo',
		age: 19,
		City: 'Bangalore',
		language: 'JS',
		framework: 'Angular',
		image: 'https://randomuser.me/api/portraits/women/75.jpg',
	},
	{
		name: 'Aishwarya Rai',
		age: 39,
		City: 'Bangalore',
		language: 'Python',
		framework: 'Flask',
		image: 'https://randomuser.me/api/portraits/women/67.jpg',
	},
	{
		name: 'Rohit Sharma',
		age: 34,
		City: 'Bangalore',
		language: 'JS',
		framework: 'Express',
		image: 'https://randomuser.me/api/portraits/men/25.jpg',
	},
];

// CV iterator
const cvIterator = (profiles) => {
	let nextIndex = 0;
	return {
		next: function () {
			return nextIndex < profiles.length
				? {
						value: profiles[nextIndex++],
						done: false,
				  }
				: {
						done: true,
				  };
		},
	};
};

const candidates = cvIterator(data);
nextCV();

// Button lostener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
	const currentCandidate = candidates.next().value;

	let image = document.getElementById('image');
	let profile = document.getElementById('profile');
	if (currentCandidate != undefined) {
		image.innerHTML = `<img src='${currentCandidate.image}'>`;

		profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name: ${currentCandidate.name}</li>
                            <li class="list-group-item">${currentCandidate.age} years old</li>
                            <li class="list-group-item">Lives in ${currentCandidate.City}</li>
                            <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                            <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
                        </ul>`;
	} else {
		alert('End of candidate applications');
		window.location.reload();
	}
}

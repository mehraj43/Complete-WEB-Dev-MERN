console.log('Welcome to project 3');

// 6e32947ad5c34cf7bdeacf31eff4ba60

// Initialize the news api parameters
let source = 'bbc-news';
const apikey = '6e32947ad5c34cf7bdeacf31eff4ba60';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
	'GET',
	`https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`
);

// what to do when response is ready
xhr.onload = function () {
	if (this.status === 200) {
		let json = JSON.parse(this.responseText);
		let articles = json.articles;
		console.log(articles);
		let newsHTML = '';
		articles.forEach((element, index) => {
			// console.log(element, index);
			let news = `<div class="card">
                <div class="card-header mb-3"  id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News ${index+1} : </b>${element['title']}
                            </button>
                    </h2>
                </div>

                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                    data-parent="#newsAccordion">
                    <div class="card-body">${element['content']}.<a href="${element['url']}" target="_blank" >Read more here</a>
                    </div>
                </div>
            </div>`;
			newsHTML += news;
		});
		newsAccordion.innerHTML = newsHTML;
	} else {
		console.log('Some error occured');
	}
};

xhr.send();

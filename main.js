// lines 17-36

// .then(function(response) {
//     // The response is a Response instance.
//     // You parse the data into a useable format using `.json()`
//     return response.json();
//   }).then(function(data) {
//     // `data` is the parsed version of the JSON returned from the above endpoint.
//     console.log(data); 
//     let items = [1,2,4,6,8,10,26,45,77,90]
//     let i = items[Math.floor(Math.random() * items.length)];
//     console.log(data.response[i].country); 
    
//     // let country = data.response[0].country;					// define the piece of data you want
//     // let countryHeading = document.getElementById('title');	// find the HTML tag you where you want to place the data
//     // let countryName = document.createTextNode(country);		// create a text node for the data
//     // countryHeading.appendChild(countryName);				// put the text inside the HTML tag

//   })

// // First require the dotenv config file
// //  require('dotenv').config();

// // This just checks to make sure SECRET_API_KEY is listed in the environment variables. Uncomment to see.
// //console.log(process.env);

// // Put the secret key in a variable
// const api_key = process.env.SECRET_API_KEY;

let arrayOfStats =[];

const getData = () => {
//function getData(){

	// Copy/paste the RapidAPI code
fetch("https://covid-193.p.rapidapi.com/statistics?country=USA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7d42ad2*******************************",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
})

// The example got us started, but it is WAY TMI. When I clicked on body, I see 'ReadableStream', so I googled 'js fetch readablestream'
	// .then(response => {
	// 	console.log(response);
	// })
	// .catch(err => {
	// 	console.error(err);
	// });

	//https://stackoverflow.com/questions/40385133/retrieve-data-from-a-readablestream-object

	.then(function(response) {
		// The response is a Response instance.
		// You parse the data into a useable format using `.json()`
		return response.json();
	  }).then(function(data) {
		// `data` is the parsed version of the JSON returned from the above endpoint.
		console.log(data); 
		console.log(data.response[0].continent); 
		
		let country = data.response[5].country;					// define the piece of data you want
		let countryHeading = document.getElementById('title');	// find the HTML tag you where you want to place the data
		let countryName = document.createTextNode(country);		// create a text node for the data
		countryHeading.appendChild(countryName);				// put the text inside the HTML tag

	  })
	.catch(err => {
	console.error(err);
	});


} // end getData(
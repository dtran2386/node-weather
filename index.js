const request = require('request');
const argv = require('yargs').argv;

let city = argv.c || 'Charlotte';
let apiKey = 'f042de1f1718f8a9d47d94a47f05276b';
let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

function toCelcius(kelvin) {
	return Math.round(kelvin * 9/5 - 459.67);
}

request(url, function(err,response,body) {
	if(err) {
		console.log('error: ', error);
	} else {
		let weather = JSON.parse(body);
		let message = `It's ${toCelcius(weather.list[0].main.temp)} degrees in ${weather.city.name}`;
		console.log(message);
	}
});
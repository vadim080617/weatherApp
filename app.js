const request = require('request-promise');

const apiKey = 'YOUR_API_KEY';

const lattitude = '50.9077';
const longtitude = '34.7981';

request(`https://api.darksky.net/forecast/${apiKey}/${lattitude}, ${longtitude}`)
    .then(console.log);
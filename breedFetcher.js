// breedFetcher.js
const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode}`), null);
    }

    const data = JSON.parse(body)
    
    if (data.length === 0) {
      console.log("This breed cannot be found.");
      return;
    }
    
    const result = data[0].description

    callback(null, result);
  });
};

module.exports = { fetchBreedDescription };
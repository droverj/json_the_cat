// breedFetcher.js
const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, _, body) => {
    if (error) return callback(error, null);

    const data = JSON.parse(body);

    if (data.length === 0) {
      return callback(`Breed not found`, null);
    }

    const result = data[0].description;

    return callback(null, result);
  });
};

module.exports = { fetchBreedDescription };
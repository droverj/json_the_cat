// breedFetcher.js
const request = require('request');
const arg = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + arg, (error, response, body) => {
  if (error) {
    console.log('error', error);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed cannot be found");
  } else {
    console.log(data[0].description);
  }
});

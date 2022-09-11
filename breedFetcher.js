// breedFetcher.js
const request = require('request');
const arg = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + arg, (error, response, body) => {
  if (error) {
    console.log('error', error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("This breed cannot be found.");
  } else {
    console.log(data[0].description);
  }
});

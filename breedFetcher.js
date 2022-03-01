const request = require('request');
let breed = process.argv[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
const breedFetcher = function(url) {
  request(url, (error, response, body) => {
    if (!breed) {
      console.log("Breed not found");
      return;
    }
    if (error) {
      console.log("request error", error);
      return;
    }
    const data = JSON.parse(body);
    const dataObject = data[0];
    console.log(dataObject["description"]);
  });
};

breedFetcher(url);


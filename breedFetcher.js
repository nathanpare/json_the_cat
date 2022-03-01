const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!breedName) {
      callback(null, "Breed not found");
      return;
    }
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    const dataObject = data[0];
    callback(null, dataObject["description"]);
  });
};


module.exports = { fetchBreedDescription };

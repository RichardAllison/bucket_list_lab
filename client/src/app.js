const BucketListView = require('./views/bucket_list_view.js');
const Request = require('./services/request.js');

const bucketListView = new BucketListView();
const countriesRequest = new Request('https://restcountries.eu/rest/v2/all');

// -------------------
const appStart = function () {
  countriesRequest.get(populateCountriesList)

  const addToListButton = document.getElementById('bucket-list-button');
  addToListButton.addEventListener('click', addToListButtonClicked);
};
// -------------------
const addToListButtonClicked = function (event) {
  event.preventDefault();

  const countryInputValue = document.getElementById('countries-select').value;
  console.log(countryInputValue);

};
// -------------------
const populateCountriesList = function (countries) {
  const select = document.getElementById('countries-select');

  countries.forEach(function(country, index){
    const option = document.createElement('option');
    option.innerText = country.name;
    select.appendChild(option);
  });

};
// -------------------
document.addEventListener('DOMContentLoaded', appStart);

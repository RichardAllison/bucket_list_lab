const BucketListView = require('./views/bucket_list_view.js');
const Request = require('./services/request.js');
const BucketListItem = require('./models/bucket_list_item.js');

const bucketListView = new BucketListView();
const countriesRequest = new Request('https://restcountries.eu/rest/v2/all');
const bucketListRequest = new Request('http://localhost:3000/api/bucket_list');


const appStart = function () {
  bucketListRequest.get(getBucketListRequestComplete);
  countriesRequest.get(populateCountriesList)

  const addToListButton = document.getElementById('bucket-list-button');
  addToListButton.addEventListener('click', addToListButtonClicked);
};

const getBucketListRequestComplete = function (bucketList) {
  bucketList.forEach(function (listItem) {
    bucketListView.addListItem(listItem);
  });
};

const addToListButtonClicked = function (event) {
  event.preventDefault();

  const countryInputValue = document.getElementById('countries-select').value;

  const countryToAdd = {
    country: countryInputValue
  };
  bucketListRequest.post(addToListRequestComplete, countryToAdd);
};

const addToListRequestComplete = function (listItem) {
  bucketListView.addListItem(listItem);
};

const populateCountriesList = function (countries) {
  const select = document.getElementById('countries-select');

  countries.forEach(function(country, index){
    const option = document.createElement('option');
    option.innerText = country.name;
    select.appendChild(option);
  });

};

document.addEventListener('DOMContentLoaded', appStart);

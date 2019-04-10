const Country = require('./models/country.js');
const SelectView = require('./views/select_view.js');
const CountryView = require('./views/country_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#countries');
  const countryDropdown = new SelectView(selectElement);
  countryDropdown.bindEvents();

  const countryContainer = document.querySelector('div#country');
  const countryView = new CountryView(countryContainer);
  countryView.bindEvents();

  const country = new Country();
  country.getData();
});

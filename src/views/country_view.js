const PubSub = require('../helpers/pub_sub.js');

const CountryView = function (container) {
  this.container = container;
}

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt) => {
    this.render(evt.detail);
  });
}

CountryView.prototype.render = function (country) {
  const h1 = document.createElement('h1');
  h1.textContent = country.name;
  this.container.appendChild(h1);

  const img = document.createElement('img');
  img.src = country.flag;
  this.container.appendChild(img);

  const h2 = document.createElement('h2');
  h2.textContent = `Region: ${country.region}`;
  this.container.appendChild(h2);
}

CountryView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = CountryView;

const {makeGradientStatic} = require('../../dist/main');
const addresses = require('./testAddresses.json');

const container = document.getElementById('icons');
for (let i = 0; i < addresses.length; i++) {
  // Create the blockie image
  var address = addresses[i];
  var icon = document.createElement('div');
  icon.title = address;
  icon.style.backgroundImage = `url(${makeGradientStatic(address)})`;
  var title = document.createElement('h5');
  title.innerHTML = address;

  // Create the container element
  var div = document.createElement('div');
  icon.classList.add('icon');
  div.appendChild(icon);
  div.appendChild(title)
  div.classList.add('icon-wrapper')

  // Insert
  container.appendChild(div);
}

// init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather obj
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init ui obj
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather());

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  // Change location
  weather.changeLocation(city, state);
  // Set Location in local storage
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}

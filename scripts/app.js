const cityForm = document.querySelector("form");
const details = document.querySelector(".details");
const card = document.querySelector(".card");

// create a new forecast object
const forecast = new Forecast();
const icon = new Icon();

// get city from localStorage
let prevCity = localStorage.getItem("city");
if (prevCity) {
  forecast
    .updateForecast(prevCity)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// update UI within the DOM
const updateUI = ({ cityDetails, forecast }) => {
  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${forecast.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${forecast.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;
  // draw weather icon
  icon.drawIcon(forecast.WeatherIcon);

  // safe information to localStorage
  localStorage.setItem("city", cityDetails.EnglishName);

  // remove d-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (e) => {
  // prevent default action
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the UI with new city
  forecast
    .updateForecast(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

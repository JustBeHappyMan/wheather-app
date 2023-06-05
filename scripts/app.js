const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon.img");

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

  // update day/night and icon images
  let timeSrc = forecast.IsDayTime ? "img/day.png" : "img/night.png";

  time.setAttribute("src", timeSrc);

  // remove d-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const forecast = await getForecast(cityDetails.Key);

  return {
    cityDetails,
    forecast,
  };
};

cityForm.addEventListener("submit", (e) => {
  // prevent default action
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the UI with new city
  updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

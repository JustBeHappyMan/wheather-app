const KEY = "5ywkx802670qiQoiDo885D3nt8UlOg5z";

// get city information
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${KEY}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// get forecast information
const getForecast = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${KEY}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

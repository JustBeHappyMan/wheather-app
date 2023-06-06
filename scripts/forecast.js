class Forecast {
  constructor() {
    this.KEY = "5ywkx802670qiQoiDo885D3nt8UlOg5z";
    this.cityBaseUrl =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    this.condBaseUrl =
      "http://dataservice.accuweather.com/currentconditions/v1/";
  }

  // getting forecast info based on input value
  async updateForecast(city) {
    const cityDetails = await this.getCity(city);
    const forecast = await this.getForecast(cityDetails.Key);

    return {
      cityDetails,
      forecast,
    };
  }

  // getting city's info based on city name
  async getCity(city) {
    const query = `?apikey=${this.KEY}&q=${city}`;

    const response = await fetch(this.cityBaseUrl + query);
    const data = await response.json();

    return data[0];
  }

  // getting forecast's info based on city id
  async getForecast(id) {
    const query = `${id}?apikey=${this.KEY}`;

    const response = await fetch(this.condBaseUrl + query);
    const data = await response.json();

    return data[0];
  }
}

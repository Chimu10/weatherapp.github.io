const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5ce832306dmshe4edaf068e1de01p13ef08jsn5483d280c2b6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_degrees2.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      cloud_pct.innerHTML = response.cloud_pct;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Mumbai");

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    mtemp.innerHTML = response.temp;
    mfeels_like.innerHTML = response.feels_like;
    mhumidity.innerHTML = response.humidity;
    mmin_temp.innerHTML = response.min_temp;
    mmax_temp.innerHTML = response.max_temp;
    mwind_speed.innerHTML = response.wind_speed;
    mwind_degrees.innerHTML = response.wind_degrees;
    msunrise.innerHTML = response.sunrise;
    msunset.innerHTML = response.sunset;
    mcloud_pct.innerHTML = response.cloud_pct;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    ptemp.innerHTML = response.temp;
    pfeels_like.innerHTML = response.feels_like;
    phumidity.innerHTML = response.humidity;
    pmin_temp.innerHTML = response.min_temp;
    pmax_temp.innerHTML = response.max_temp;
    pwind_speed.innerHTML = response.wind_speed;
    pwind_degrees.innerHTML = response.wind_degrees;
    psunrise.innerHTML = response.sunrise;
    psunset.innerHTML = response.sunset;
    pcloud_pct.innerHTML = response.cloud_pct;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    btemp.innerHTML = response.temp;
    bfeels_like.innerHTML = response.feels_like;
    bhumidity.innerHTML = response.humidity;
    bmin_temp.innerHTML = response.min_temp;
    bmax_temp.innerHTML = response.max_temp;
    bwind_speed.innerHTML = response.wind_speed;
    bwind_degrees.innerHTML = response.wind_degrees;
    bsunrise.innerHTML = response.sunrise;
    bsunset.innerHTML = response.sunset;
    bcloud_pct.innerHTML = response.cloud_pct;
  })
  .catch((err) => console.error(err));
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    ktemp.innerHTML = response.temp;
    kfeels_like.innerHTML = response.feels_like;
    khumidity.innerHTML = response.humidity;
    kmin_temp.innerHTML = response.min_temp;
    kmax_temp.innerHTML = response.max_temp;
    kwind_speed.innerHTML = response.wind_speed;
    kwind_degrees.innerHTML = response.wind_degrees;
    ksunrise.innerHTML = response.sunrise;
    ksunset.innerHTML = response.sunset;
    kcloud_pct.innerHTML = response.cloud_pct;
  })
  .catch((err) => console.error(err));


  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
  
      dtemp.innerHTML = response.temp;
      dfeels_like.innerHTML = response.feels_like;
      dhumidity.innerHTML = response.humidity;
      dmin_temp.innerHTML = response.min_temp;
      dmax_temp.innerHTML = response.max_temp;
      dwind_speed.innerHTML = response.wind_speed;
      dwind_degrees.innerHTML = response.wind_degrees;
      dsunrise.innerHTML = response.sunrise;
      dsunset.innerHTML = response.sunset;
      dcloud_pct.innerHTML = response.cloud_pct;
    })
    .catch((err) => console.error(err));
  
const weatherIcon = document.getElementsByClassName("weather-icon");
const city = document.getElementsByClassName("city");
const country = document.getElementsByClassName("country");
const condition = document.getElementsByClassName("condition");
const temp = document.getElementsByClassName("temp");
const pressure = document.getElementsByClassName("pressure");
const humidity = document.getElementsByClassName("humidity");
const yourCity = document.getElementsByClassName("your-city");

//Api key
const api_key = "5f410791a00cc07230b3c36e963b4cd4";
const base_url =
    "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const img_url = "http://openweathermap.org/img/wn/";

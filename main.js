const base_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "3136d2cad0845ca2700187f1867b9738";
const btn = document.querySelector(".btn");
const para = document.querySelector(".para");
const massege = document.querySelector(".massege");
const cityName = document.querySelector(".city-name");
const temprture = document.querySelector(".temprture");
const humidity = document.querySelector(".Humidity");
const windSpeed = document.querySelector(".Wind-speed");
const wetherImg = document.querySelector(".weather-img");
massege.innerHTML = '';
// console.log(city);

// window relod and function call 
window.addEventListener('load',getData);
btn.addEventListener('click',getData);
async function getData() {
const cityValue = document.querySelector("#input").value;
cityValue.toLowerCase();
const city = cityValue.charAt(0).toUpperCase() + cityValue.slice(1);
console.log(city);
    const response = await fetch(`${base_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    const icon = data.weather[0].icon;
    if(city === ""){
        console.log("please city Enter");
    }
cityName.innerHTML = `City Name : ${data.name}`;
temprture.innerHTML = `${(Math.floor(data.main.temp))}°C`;
windSpeed.innerHTML = `Wind Speed : ${data.wind.speed}m/s`;
humidity.innerHTML =`Humidity : ${data.main.humidity}%`;
wetherImg.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon" class = "img-icon">`


}



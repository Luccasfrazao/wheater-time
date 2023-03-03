//Variáveis e seleção de elementos
const apiKey = 'd7c4d402fc23fb97c3a0db9774144e5e';

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#wheater-data");




//funções

const getWeatherData = async(city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch (apiWeatherURL);
    const data = await res.json();

    return data;
}

const showWeatherData = async (city)  =>{
    const data =  await getWeatherData(city);
   cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
//   countryElement.setAttribute("src", apiCountryURL + data.sys.country);
  umidityElement.innerHTML = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;



}

//eventos
searchBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
    weatherContainer.classList.remove("hide");


})


cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      const city = e.target.value;
  
      showWeatherData(city);
    }
  });
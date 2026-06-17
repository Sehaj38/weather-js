const button = document.getElementById("search-btn");
const input = document.getElementById("input-Text");


const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city-name");
const condition = document.querySelector(".condition");
const localTime = document.getElementById("localTime");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");


async function getData(city) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=12e90054e51142f09ac92434261706&q=${city}&aqi=yes`
    );
    return promise.json();
}

button.addEventListener("click", async () => {
    const val = input.value;
    const result = await getData(val);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    
    temp.innerText = `${result.current.temp_c}°`;
    
    condition.innerHTML = `
    <img src="https:${result.current.condition.icon}">
    <p>${result.current.condition.text}</p>`;
    
    localTime.innerText = result.location.localtime.split(" ")[1];

    humidity.innerText = `${result.current.humidity}%`;

    wind.innerText = `${result.current.wind_kph}Km/h`;
});
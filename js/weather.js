const API_KEY = "18e32fdcc2f554dac308f9b937feddea";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        city.innerText = `${data.name} / `;
        weather.innerText = `${Math.round(data.main.temp)}°C ${data.weather[0].main}`;
    });
}
function onGeoError() {
    alert("Can't find you. No waether for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
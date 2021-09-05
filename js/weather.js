const API_KEY = "090648770d5383a87e3511ba0c8b24fd";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)")
        const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      temp.innerText = Math.ceil(data.main.temp)+"℃"
      weather.innerText = `${data.weather[0].main}`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
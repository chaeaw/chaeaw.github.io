const API_KEY = "b2a2479af9faf51f67dc1f1d00dd7f63"


function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
    city.innerText = `🌟${data.name}`;
    weather.innerText = `🌈${data.weather[0].main}`;
  });

}
function onGeoError(){
  alert("Can find you. no weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOK(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather");
            const span = document.createElement("span");
            weather.innerHTML = `<img src="../img/${data.weather[0].icon}.png">`;
            span.innerHTML = `${data.name} <br><br> temp : ${data.main.temp}`;
            weather.append(span);
            // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

if(isLogin){
    const weatherDiv = document.querySelector(".weather");
    weatherDiv.classList.remove("hidden");
}

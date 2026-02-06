const apiKey = "1653b7db500f611945ccd229ff8c4ddc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const weatherIcon = document.querySelector('.weather-icon');

const inputElement = document.querySelector('.card input');
const buttonElement = document.querySelector('.card button');

async function loadWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if(response.status === 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `°C`;
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + `%`;
    document.querySelector('.wind').innerHTML = data.wind.speed + ` km/h`;

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = 'assets/images/clouds.png';
    }else if(data.weather[0].main === "Clear"){
         weatherIcon.src = 'assets/images/clear.png';
    }else if(data.weather[0].main === "Rain"){
         weatherIcon.src = 'assets/images/rain.png';
    }else if(data.weather[0].main === "Drizzle"){
         weatherIcon.src = 'assets/images/drizzle.png';
    }else if(data.weather[0].main === "Mist"){
            weatherIcon.src = 'assets/images/mist.png';
    }

    document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
}
}

buttonElement.addEventListener('click', (event) => {
    loadWeather(inputElement.value);
    inputElement.value = "";
});

inputElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        loadWeather(inputElement.value);
        inputElement.value = "";
    }
});


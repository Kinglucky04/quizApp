 const apiKey = "1653b7db500f611945ccd229ff8c4ddc";
 const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
 const searchBox = document.querySelector('.search-input');
 const searchBtn = document.querySelector('.search-btn');
 const weatherIcon = document.querySelector('.weather-icon');

 async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }else{

        document.querySelector('.city-name').innerHTML = data.name;
        document.querySelector('.tempt').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " km/h";

         if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "assets/images/clouds.png";
        }else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "assets/images/clear.png";
        }else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "assets/images/rain.png";
        }else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "assets/images/drizzle.png";
        }else if(data.weather[0].main === "Snow"){
            weatherIcon.src = "assets/images/snow.png";
        }else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "assets/images/mist.png";
        }

        document.querySelector('.error').style.display = "none";
        document.querySelector('.weather').style.display = "block";
    }

   

   
 }

 searchBtn.addEventListener('click', () => {
         checkWeather(searchBox.value);
 });




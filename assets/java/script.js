var searchFormEl = document.querySelector("#search-form");
var searchFormCityInputEl = document.querySelector("#search-form-city-input");
var weatherDayCityEl = document.querySelector("#weather-day-city");
var weatherDayTempEl = document.querySelector("#weather-day-temp");
var weatherDayWindEl = document.querySelector("#weather-day-wind");
var weatherDayHumidityEl = document.querySelector("#weather-day-humidity");
var weatherDayUvIndexEl = document.querySelector("#weather-day-uv-index");
var forecastContainerEL = document.querySelector("#forecast-container")

var baseUrl = "http://api.openweathermap.org";
var apiKey = "6e4e54792e03870ea10d0a9af2e7b0bf";

function populate5day(data) {
    data.forEach(function (day, index) {
        if(index === 0 || index > 5) {
            return;
        }
        var temp = day.temp.day;
        var windSpeed = day.wind_speed;
        var humidity = day.humidity;
        var icon = day.weather[0].icon;
        var div = document.createElement('div');
        div.classList = "card-weather col-md-2 col-sm-12 bg-dark text-light me-3"
        div.innerHTML = `
            <h4>3/31/2021</h4>
            <img src=https://openweathermap.org/img/wn/${icon}.png />
            <dl>
                <dt>Temp:</dt>
                <dd>${temp}</dd>
                <dt>wind:</dt>
                <dd>${windSpeed} MPH</dd>
                <dt>Humidity</dt>
                <dd>${humidity}%</dd>
            </dl>
            `;
            forecastContainerEL.appendChild(div);
    })
}

function getCityDayWeather(city) {
    var url = `${baseUrl}geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

    fetch(url).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            var cityObject = data[0];
            var lat = cityObject.lat
            var lon = cityObject.lon

            var currentWeatherUrl = `${baseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`


            fetch(currentWeatherUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    var current = data.current;
                    var temp = current.temp;
                    var windSpeed = current.wind_speed;
                    var humidity = current.humidity;
                    var uviIndex = current.uvi;

                    weatherDayCityEl.textContent = city
                    weatherDayTempEl.textContent = temp
                    weatherDayWindEl.textContent = windSpeed
                    weatherDayHumidityEl.textContent = humidity
                    weatherDayUvIndexEl.textContent = uviIndex

                    populate5day.textContent = 
                })
        });
}


function handleFormSubmit() {
    searchFormEl.addEventListener("submit", function (evt) {
        evt.preventDefault();
        window.alert("foo");
    })
}
function addEventListeners() {
    searchFormEl.addEventListener("submit", function (evt) {
    })
}

function init() {
    addEventListeners();
}
init()
















// $(document).ready(function () {
//     var apiKey = "6e4e54792e03870ea10d0a9af2e7b0bf";
//     var lat = "33.03"
//     var lon = "-93.15"
//     var city = "chicago"
//     var urlKey = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

//     $.ajax({
//         url: urlKey, success: function (result) {
//             console.log(result)
//         }
//     });



//}) 
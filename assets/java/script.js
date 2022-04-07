$(document).ready(function () {
    var apiKey = "6e4e54792e03870ea10d0a9af2e7b0bf";
    var lat = "33.03"
    var lon = "-93.15"
    var city = "chicago"
    var urlKey = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    $.ajax({
        url: urlKey, success: function (result) {
            console.log(result)
        }
    });



}) 
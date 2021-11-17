const { data } = require("jquery");


function getWeather(){
    let temperature = document.getElementById("temperature");
    let location = document.getElementById("location");
    let description = document.getElementById("description")
    
    let api = "https://www.weatherapi.com/my/";
    let apiKey = "f31428e5855f461281f145353211611";

    navigator.geolocation.getCurrentPosition(success,error);


    function success(position){
        console.log(position);
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        let url = api + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";

        $.getJSON(url,function(data){
            var celsius = Math.round(data.main.temp - 273);
            $("#location").html(data.name + " , " + data.sys.country);
            $("#temperature").html(celsius);
            $("#description").html(data.weather[0].description);
        });
       
    }


    function error(){
        console.log("Location could not be accessed")
    }
}

getWeather();
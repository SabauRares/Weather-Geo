function getWeather(){
    let temperature = document.getElementById("temperature");
    let location = document.getElementById("location");
    let description = document.getElementById("description")
    
    let api = "https://www.weatherapi.com/my/";
    let apiKey = "f31428e5855f461281f145353211611";

    navigator.geolocation.getCurrentPosition(success,error);


    function success(position){
        //console.log(position);
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        let url = "http://api.weatherapi.com/v1/forecast.json?key=f31428e5855f461281f145353211611&q="+latitude+","+longitude+"&days=1&aqi=no&alerts=no";
        console.log(position);
        $.getJSON(url,function(data){
            //console.log(position);
            // console.log(data.name + " , " + data.sys.country);
            //console.log(data.weather[0].description);
            //var celsius = Math.round(data.main.temp_c - 273);
            //console.log(celsius);
            $('#location').html(data.name + " , " + data.sys.country);
            $('#temperature').html(data.main.temp_c);
            $('#description').html(data.weather[0].description);
        });
       
    }


    function error(){
        console.log("Location could not be accessed")
    }
}

getWeather();
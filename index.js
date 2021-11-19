function getWeather(){
    let temperature = document.getElementById("temperature");
    let location = document.getElementById("location");
    let description = document.getElementById("description")
    
    let api = "https://www.weatherapi.com/my/";
    let apiKey = "f31428e5855f461281f145353211611";

    navigator.geolocation.getCurrentPosition(success,error);


    function success(position){
       // console.log(position);
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        let url = "http://api.weatherapi.com/v1/forecast.json?key=f31428e5855f461281f145353211611&q="+latitude+","+longitude+"&days=7&aqi=no&alerts=no";
        //console.log(position);
        $.getJSON(url,function(data){
            console.log(data);
            var day=new Date(data.forecast.forecastday[0].date);
            //const day1 = weekday.getDay();
           /* switch (new Date(data.forecast.forecastday[0].date).getDay()) {
                case 0:
                  day = "Sunday";
                  break;
                case 1:
                  day = "Monday";
                  break;
                case 2:
                  day = "Tuesday";
                  break;
                case 3:
                  day = "Wednesday";
                  break;
                case 4:
                  day = "Thursday";
                  break;
                case 5:
                  day = "Friday";
                  break;
                case 6:
                  day = "Saturday";
              }*/
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var d= day.getDay();
            var i=0;
            //console.log(data.location.region);
            //console.log(data.current.condition.text);
            //var celsius = Math.round(data.main.temp_c - 273);
            //console.log(celsius);
            //console.log(data.forecast.forecastday[0].date);
            $('#date').html(weekday[d + i]);
            $('#location').html(data.location.name + " , " + data.location.region + " , " +data.location.country);
            $('#temperature').html(data.current.temp_c + " ℃");
            $('#description').html(data.current.condition.text);
              i++;
              if((d+i)>6){d=d-7;}

            $('#date1').html(weekday[d + i]);
            $('#location1').html(data.location.name + " , " + data.location.region + " , " +data.location.country);
            $('#temperature1').html(data.forecast.forecastday[1].day.avgtemp_c + " ℃");
            $('#description1').html(data.forecast.forecastday[1].day.condition.text);
              i++;
              if((d+i)>6){d=d-7;}

            $('#date2').html(weekday[d + i]);
            $('#location2').html(data.location.name + " , " + data.location.region + " , " +data.location.country);
            $('#temperature2').html(data.forecast.forecastday[2].day.avgtemp_c + " ℃");
            $('#description2').html(data.forecast.forecastday[2].day.condition.text);

            /*$('#date3').html(data.forecast.forecastday[3].date);
            $('#location3').html(data.location.name + " , " + data.location.region + " , " +data.location.country);
            $('#temperature3').html(data.forecast.forecastday[3].day.avgtemp_c + " ℃");
            $('#description3').html(data.forecast.forecastday[3].day.condition.text);

            $('#date4').html(data.forecast.forecastday[4].date);
            $('#location4').html(data.location.name + " , " + data.location.region + " , " +data.location.country);
            $('#temperature4').html(data.forecast.forecastday[4].day.avgtemp_c + " ℃");
            $('#description4').html(data.forecast.forecastday[4].day.condition.text);

            $('#date5').html(data.forecast.forecastday[5].date);
            $('#location5').html(data.location.name + " , " + data.location.region + " , " +data.location.country);
            $('#temperature5').html(data.forecast.forecastday[5].day.avgtemp_c + " ℃");
            $('#description5').html(data.forecast.forecastday[5].day.condition.text);

            $('#date6').html(data.forecast.forecastday[6].date);
            $('#location6').html(data.location.name + " , " + data.location.region + " , " +data.location.country);
            $('#temperature6').html(data.forecast.forecastday[6].day.avgtemp_c + " ℃");
            $('#description6').html(data.forecast.forecastday[6].day.condition.text);*/
        });
       
    }


    function error(){
        console.log("Location could not be accessed")
    }
}

getWeather();
function getWeather(){
    let temperature = document.getElementById("temperature");
    let location = document.getElementById("location");
    let description = document.getElementById("description")
    
    let api = "https://www.weatherapi.com/my/";
    let apiKey = "f31428e5855f461281f145353211611";
//------------------------------------------------------------ initialization
   
    navigator.geolocation.getCurrentPosition(success,error);   //getting the geolocation  


    function success(position){  // if the function succedes, procede
       // console.log(position);
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        let url = "http://api.weatherapi.com/v1/forecast.json?key=f31428e5855f461281f145353211611&q="+latitude+","+longitude+"&days=7&aqi=no&alerts=no";
        //setting the url for the api

        $.getJSON(url,function(data){  //getting the forcast for the next n days as a json

            console.log(data);
            var day=new Date(data.forecast.forecastday[0].date);
           
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
// We use getDay to get a number coresponding to a day of the week and 
//then we create an array to store the string that containt the actual day of the week
            
            $('#date').html(weekday[d + i]);
            $('#location').html(data.location.name + " , " + data.location.region + " , " +data.location.country);
            $('#temperature').html(data.current.temp_c + " ℃");
            $('#description').html(data.current.condition.text);
              i++;
              if((d+i)>6){d=d-7;}

//We atribute to each ID of the HTML file the data collected from the weather api, that will be displayed
//We then reset the value we got from getDay()   if(The value we got from the function + number of days that passed)>7
//We repete this procedure as many times, as days we want

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
        
            //The Api forcast feature only gave us the forecast for 3 days 
        });
       
    }


    function error(){    //if we can not get the geolocation , we return an error message
        error.textContent="Location could not be accessed";
    }
}

getWeather(); //we call the function
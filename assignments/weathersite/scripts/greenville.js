window.onload = function programw() {
    var weatherRequest = new XMLHttpRequest();
    var requrl = "https://api.openweathermap.org/data/2.5/forecast?id=4695066&APPID=3bb5bcb8ab732558b61078e783f89c18";
    weatherRequest.open('GET', requrl, true);
    weatherRequest.send();
    weatherRequest.onload = function () {
        var weatherData = JSON.parse(weatherRequest.responseText);
        console.log(weatherData);
        var currentw = weatherData.list[0].main.temp;
        var temphigh = weatherData.list[0].main.temp_max;
        var templow = weatherData.list[0].main.temp_min;
        var windspeed = weatherData.list[0].wind.speed;
        var iconcode = weatherData.list[0].weather[0].icon;
        var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
        document.getElementById("weather_icon").src = icon_path;
        var wedescription = weatherData.list[0].weather[0].main;;
        var convertyc = ((currentw - 273.15) * 1.8) + 32;
        var convertyh = ((temphigh - 273.15) * 1.8) + 32;
        var convertyl = ((templow - 273.15) * 1.8) + 32;
        document.getElementById("currentweather").innerHTML = convertyc.toFixed(2) + " ºF";
        document.getElementById("temphigh").innerHTML = convertyh.toFixed(2);
        document.getElementById("templow").innerHTML = convertyl.toFixed(2);
        document.getElementById("windspeed").innerHTML = windspeed.toFixed(2);
        document.getElementById("weatherdescription").innerHTML = wedescription;
        var temphigh2 = parseFloat(convertyh.toFixed(2));
        var templow2 = parseFloat(convertyl.toFixed(2));
        var tempe = (temphigh2 + templow2) / 2;
        if (tempe <= 50) {
            var wspeedf = windspeed.toFixed(2);
            var finalform = windprogram(tempe, wspeedf);
            document.getElementById("windchilout").innerHTML = finalform.toFixed(2) + " ºF";
        } else {
            document.getElementById("windchilout").innerHTML = "Not Apply";
        }

        // Here the code for the 10 days forecast table 
        var currentw1 = weatherData.list[1].main.temp;
        var convertyc1 = ((currentw1 - 273.15) * 1.8) + 32;
        document.getElementById("currentweather1").innerHTML = convertyc1.toFixed(2) + " ºF";

        var currentw2 = weatherData.list[2].main.temp;
        var convertyc2 = ((currentw2 - 273.15) * 1.8) + 32;
        document.getElementById("currentweather2").innerHTML = convertyc2.toFixed(2) + " ºF";

        var currentw3 = weatherData.list[3].main.temp;
        var convertyc3 = ((currentw3 - 273.15) * 1.8) + 32;
        document.getElementById("currentweather3").innerHTML = convertyc3.toFixed(2) + " ºF";

        var currentw4 = weatherData.list[4].main.temp;
        var convertyc4 = ((currentw4 - 273.15) * 1.8) + 32;
        document.getElementById("currentweather4").innerHTML = convertyc4.toFixed(2) + " ºF";

        var currentw5 = weatherData.list[5].main.temp;
        var convertyc5 = ((currentw5 - 273.15) * 1.8) + 32;
        document.getElementById("currentweather5").innerHTML = convertyc5.toFixed(2) + " ºF";

        var currentw6 = weatherData.list[6].main.temp;
        var convertyc6 = ((currentw6 - 273.15) * 1.8) + 32;
        document.getElementById("currentweather6").innerHTML = convertyc6.toFixed(2) + " ºF";

        var currentw7 = weatherData.list[7].main.temp;
        var convertyc7 = ((currentw7 - 273.15) * 1.8) + 32;
        document.getElementById("currentweather7").innerHTML = convertyc7.toFixed(2) + " ºF";

        var currentw8 = weatherData.list[8].main.temp;
        var convertyc8 = ((currentw8 - 273.15) * 1.8) + 32;
        document.getElementById("currentweather8").innerHTML = convertyc8.toFixed(2) + " ºF";

        var currentw9 = weatherData.list[9].main.temp;
        var convertyc9 = ((currentw9 - 273.15) * 1.8) + 32;
        document.getElementById("currentweather9").innerHTML = convertyc9.toFixed(2) + " ºF";

        var currentw10 = weatherData.list[10].main.temp;
        var convertyc10 = ((currentw10 - 273.15) * 1.8) + 32;
        document.getElementById("currentweather10").innerHTML = convertyc10.toFixed(2) + " ºF";
    }
}

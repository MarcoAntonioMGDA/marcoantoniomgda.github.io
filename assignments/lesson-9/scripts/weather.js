window.onload = function programw() {
    var weatherRequest = new XMLHttpRequest();
    var requrl = "https://api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=3bb5bcb8ab732558b61078e783f89c18";
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
        var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
        document.getElementById("weather_icon").src = icon_path;
        var wedescription = weatherData.list[0].weather[0].main;;
        var convertyc = ((currentw - 273.15) * 1.8) + 32;
        var convertyh = ((temphigh - 273.15) * 1.8) + 32;
        var convertyl = ((templow - 273.15) * 1.8) + 32;
        document.getElementById("currentweather").innerHTML = convertyc.toFixed(2) + " ºF";
        document.getElementById("temphigh").value = convertyh.toFixed(2);
        document.getElementById("templow").value = convertyl.toFixed(2);
        document.getElementById("windspeed").value = windspeed.toFixed(2);
        document.getElementById("weatherdescription").innerHTML = wedescription;
        var temphigh2 = parseFloat(convertyh.toFixed(2));
        var templow2 = parseFloat(convertyl.toFixed(2));
        var tempe = (temphigh2 + templow2) / 2;
        var wspeedf = windspeed.toFixed(2);
        var finalform = windprogram(tempe, wspeedf);
        document.getElementById("windchilout").innerHTML = finalform.toFixed(2) + " ºF";

        // I don't know why, but when the codes are together they can't work, that's why here I copied my hour code
        var d = new Date();

        // Here we obtain the name of the day w/ an array
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        // With another array we obtain the Month

        var monthy = new Array(12);

        monthy[0] = "January";
        monthy[1] = "February";
        monthy[2] = "March";
        monthy[3] = "April";
        monthy[4] = "May";
        monthy[5] = "June";
        monthy[6] = "July";
        monthy[7] = "August";
        monthy[8] = "September";
        monthy[9] = "October";
        monthy[10] = "November";
        monthy[11] = "December";

        // Here we create a String this this format "Day Name, Number Month Year"
        var n = weekday[d.getDay()] + ", " + d.getDate() + " " + monthy[d.getMonth()] + " " + d.getFullYear();
        //We displayon screen in the id  = "currentdate"
        document.getElementById("currentdate").innerHTML = n;
    }
}

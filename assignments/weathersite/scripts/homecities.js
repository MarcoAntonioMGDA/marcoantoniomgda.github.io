function homecities() {

  var towndata = new XMLHttpRequest();
  var requrl = "https://byui-cit230.github.io/weather/data/towndata.json";
  towndata.open('GET', requrl, true);
  towndata.send();
  towndata.onload = function () {
    var obtainedata = JSON.parse(towndata.responseText);
    console.log(obtainedata);
    document.getElementById("frankname").innerHTML = obtainedata.towns[0].name;
    document.getElementById("frankmoto").innerHTML = obtainedata.towns[0].motto;
    document.getElementById("frankyear").innerHTML = obtainedata.towns[0].yearFounded;
    document.getElementById("frankpopulation").innerHTML = obtainedata.towns[0].currentPopulation;
    document.getElementById("frankaverage").innerHTML = obtainedata.towns[0].averageRainfall;
    document.getElementById("frankevent1").innerHTML = obtainedata.towns[0].events[0];
    document.getElementById("frankevent2").innerHTML = obtainedata.towns[0].events[1];
    document.getElementById("frankevent3").innerHTML = obtainedata.towns[0].events[2];
    // This is for green city
    document.getElementById("greenname").innerHTML = obtainedata.towns[1].name;
    document.getElementById("greenmotos").innerHTML = obtainedata.towns[1].motto;
    document.getElementById("greenyear").innerHTML = obtainedata.towns[1].yearFounded;
    document.getElementById("greenpopulation").innerHTML = obtainedata.towns[1].currentPopulation;
    document.getElementById("greenaverage").innerHTML = obtainedata.towns[1].averageRainfall;
    document.getElementById("greenevent1").innerHTML = obtainedata.towns[1].events[0];
    document.getElementById("greenevent2").innerHTML = obtainedata.towns[1].events[1];
    document.getElementById("greenevent3").innerHTML = obtainedata.towns[1].events[2];
    document.getElementById("greenevent4").innerHTML = obtainedata.towns[1].events[3];
    // This is for sringfield
    document.getElementById("springname").innerHTML = obtainedata.towns[3].name;
    document.getElementById("springmotos").innerHTML = obtainedata.towns[3].motto;
    document.getElementById("springyear").innerHTML = obtainedata.towns[3].yearFounded;
    document.getElementById("springpopulation").innerHTML = obtainedata.towns[1].currentPopulation;
    document.getElementById("springaverage").innerHTML = obtainedata.towns[3].averageRainfall;
    document.getElementById("springevent1").innerHTML = obtainedata.towns[3].events[0];
    document.getElementById("springevent2").innerHTML = obtainedata.towns[3].events[1];
    document.getElementById("springevent3").innerHTML = obtainedata.towns[3].events[2];
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

homecities();

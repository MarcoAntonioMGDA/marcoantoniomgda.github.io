function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }

  var urlString, urlArray, pageHREF, menu, i, currentURL;
  urlString = document.location.href;
  urlArray = urlString.split('/');
  pageHREF = urlArray[urlArray.length - 1];

  if (pageHREF !== "") {
    menu = document.querySelectorAll('ul#primaryNav li a');
    for (i = 0; i < menu.length; i++) {
      currentURL = (menu[i].getAttribute('href'));
      menu[i].parentNode.className = '';
      if (currentURL === pageHREF) {
        menu[i].parentNode.className = 'active';
      }
    }
  }

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
  var n = weekday[d.getDay()] + ", " + monthy[d.getMonth()] + " " + d.getDate() + "th, " + d.getFullYear();
  //We displayon screen in the id  = "currentdate"
  document.getElementById("currentdate").innerHTML = n;


}

includeHTML();

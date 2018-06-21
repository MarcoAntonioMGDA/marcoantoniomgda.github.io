function windchill2() {
    var high5 = parseFloat(document.getElementById("temphigh").value);
    var low5 = parseFloat(document.getElementById("templow").value);
    var windspeed5 = parseFloat(document.getElementById("windspeed").value);
    var tempe5 = (high5 + low5) / 2;
    var finalform = windprogram(tempe5, windspeed5);
    document.getElementById("windchilout").innerHTML = finalform.toFixed(2) + " ºF";

}

function windprogram(tempF, speed) {
    // here in this new function we obtain the result in a var
    var f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    // we'll return the result in order to obtain the information in the var finalform = windprogram(tempe, windspeed);
    return f;
}

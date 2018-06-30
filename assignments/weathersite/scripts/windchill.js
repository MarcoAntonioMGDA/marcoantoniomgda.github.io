function windprogram(tempF, speed) {
    // here in this new function we obtain the result in a var
    var f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    // we'll return the result in order to obtain the information in the var finalform = windprogram(tempe, windspeed);
    return f;
}

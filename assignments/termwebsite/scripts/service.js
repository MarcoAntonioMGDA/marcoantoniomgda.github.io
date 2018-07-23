function service() {
    var servicetable = new XMLHttpRequest();
    var requrl = "data/sales.json";
    servicetable.open('GET', requrl, true);
    servicetable.send();
    servicetable.onload = function () {
        var obtainedata = JSON.parse(servicetable.responseText);
        console.log(obtainedata);
        document.getElementById("l1c1").innerHTML = obtainedata.sales[0].id;
        document.getElementById("l1c2").innerHTML = obtainedata.sales[0].name;
        document.getElementById("l1c3").innerHTML = obtainedata.sales[0].time;
        document.getElementById("l1c4").innerHTML = obtainedata.sales[0].taxes;
        document.getElementById("l1c5").innerHTML = obtainedata.sales[0].home;
        document.getElementById("l1c6").innerHTML = obtainedata.sales[0].discounts;
        document.getElementById("l1c7").innerHTML = obtainedata.sales[0].credit;
        document.getElementById("l1c8").innerHTML = "$" + obtainedata.sales[0].price;
        document.getElementById("l2c1").innerHTML = obtainedata.sales[1].id;
        document.getElementById("l2c2").innerHTML = obtainedata.sales[1].name;
        document.getElementById("l2c3").innerHTML = obtainedata.sales[1].time;
        document.getElementById("l2c4").innerHTML = obtainedata.sales[1].taxes;
        document.getElementById("l2c5").innerHTML = obtainedata.sales[1].home;
        document.getElementById("l2c6").innerHTML = obtainedata.sales[1].discounts;
        document.getElementById("l2c7").innerHTML = obtainedata.sales[1].credit;
        document.getElementById("l2c8").innerHTML = "$" + obtainedata.sales[1].price;
        document.getElementById("l3c1").innerHTML = obtainedata.sales[2].id;
        document.getElementById("l3c2").innerHTML = obtainedata.sales[2].name;
        document.getElementById("l3c3").innerHTML = obtainedata.sales[2].time;
        document.getElementById("l3c4").innerHTML = obtainedata.sales[2].taxes;
        document.getElementById("l3c5").innerHTML = obtainedata.sales[2].home;
        document.getElementById("l3c6").innerHTML = obtainedata.sales[2].discounts;
        document.getElementById("l3c7").innerHTML = obtainedata.sales[2].credit;
        document.getElementById("l3c8").innerHTML = "$" + obtainedata.sales[2].price;
        document.getElementById("l4c1").innerHTML = obtainedata.sales[3].id;
        document.getElementById("l4c2").innerHTML = obtainedata.sales[3].name;
        document.getElementById("l4c3").innerHTML = obtainedata.sales[3].time;
        document.getElementById("l4c4").innerHTML = obtainedata.sales[3].taxes;
        document.getElementById("l4c5").innerHTML = obtainedata.sales[3].home;
        document.getElementById("l4c6").innerHTML = obtainedata.sales[3].discounts;
        document.getElementById("l4c7").innerHTML = obtainedata.sales[3].credit;
        document.getElementById("l4c8").innerHTML = "$" + obtainedata.sales[3].price;
    }
}

service();



var endDate = new Date(2016, 8, 24, 13, 30, 00);

function countdown () {

    var actDate = new Date();

    var diff = actDate - endDate;


    var diffSeconds = Math.floor(diff / 1000);
    var diffMin = Math.floor(diffSeconds / 60);
    var diffHour = Math.floor(diffMin / 60);
    var diffDay = Math.floor(diffHour / 24);

    //console.log(endDate, actDate, diffDay, diffHour, diffMin, diffSeconds);

    document.getElementById("cd-day").innerHTML = diffDay;
    document.getElementById("cd-hour").innerHTML = diffHour % 24;
    document.getElementById("cd-min").innerHTML = diffMin % 60;
    document.getElementById("cd-sec").innerHTML = diffSeconds % 60;

    setTimeout('countdown()',200);
}
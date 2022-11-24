var span = document.getElementById("span");
var timerID = setInterval("doRotate()", 200);

span.onclick = function (e) {
    clearInterval(timerID);
}

function doRotate() {
    var str = span.innerHTML;
    var firstChar = str.substr(0, 1);
    var remains = str.substr(1, str.length-1);
    str = remains + firstChar;
    span.innerHTML = str;
}
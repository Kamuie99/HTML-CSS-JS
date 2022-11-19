var div = document.getElementById("div");
function where(e) {
    var text = "버튼=" + e.button + "<br>";
    text += "(screenX, screenY) = " + e.screenX + "," + e.screenY  + "<br>";
    text += "(clientX, clientY) = " + e.clientX + "," + e.clientY  + "<br>";
    text += "(offsetX, offsetY) = " + e.offsetX + "," + e.offsetY  + "<br>";
    text += "(x, y) = " + e.x + "," + e.y  + "\n";
    div.innerHTML = text;
}
function f(e) {
    var text = "type" + e.type + "<br>"
        + "target" + e.target + "<br>"
        + "currentTarget" + e.currentTarget + "<br>"
        + "defaultPrevented" + e.defaultPrevented;

    var p = document.getElementById("p");
    p.innerHTML = text;
}

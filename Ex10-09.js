function load() {
    var select = document.getElementById("site");
    window.location = select.options[select.selectedIndex].value;
}
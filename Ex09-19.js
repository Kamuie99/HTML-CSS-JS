function drawImage() {
    var sel = document.getElementById("fruits");
    var img = document.getElementById("fruitimage");
    img.src = sel.options[sel.selectedIndex].value;
}
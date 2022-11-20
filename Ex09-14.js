function changeImage() {
    var sel = document.getElementById("sel");
    var img = document.getElementById("myImg");
    img.onload = function() {
        var mySpan = document.getElementById("mySpan");
        mySpan.innerHTML = img.width + "x" + img.clientHeight;
    }
    var index = sel.selectedIndex;
    img.src = sel.options[index].value;
}
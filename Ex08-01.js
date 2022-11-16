var p = document.getElementById("firstP");
var text = "p.id = " + p.id + "\n";
text += "p.tagName = " + p.tagName + "\n";
text += "p.innerHTML = " + p.innerHTML + "\n";
text += "p.style.color = " + p.style.color + "\n";
text += "p.onclick = " + p.onclick + "\n";
text += "p.childElementCount = " + p.childElementCount + "\n";
text += "너비 = " + p.offsetWidth + "\n";
text += "높이 = " + p.offsetHeight + "\n";

alert(text);
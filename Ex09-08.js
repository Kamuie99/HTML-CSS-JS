var div = document.getElementById("div");
var button = document.getElementById("button");

document.body.addEventListener("click", capture, true);

button.addEventListener("click", bubble, false);

document.body.addEventListener("click", bubble, false);

function capture(e) {
    var obj = e.currentTarget;
    var tagName = obj.tagName;
    div.innerHTML += "<br>capture 단계: " + tagName + " 태그" + e.type + "이벤트";
}

function bubble(e) {
    var obj = e.currentTarget;
    var tagName = obj.tagName;
    div.innerHTML += "<br>bubble 단계 : " + tagName + " 태그" + e.type + "이벤트";
}
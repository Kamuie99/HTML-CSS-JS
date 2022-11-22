function whatKeyDown (e) {
    var str = "";
    var div = document.getElementById("div");
    div.innerHTML = "";
    
    if(e.altKey) {
        if(e.altLeft) str += "왼쪽 ALT 키가 눌러졌습니다";
        else str += "오른쪽 ALT 키가 눌러졌습니다.";
        str += "<br>";
    }

    if(e.shiftKey) {
        if(e.shiftLeft) str += "왼쪽 SHIFT 키가 눌러졌습니다";
        else str += "오른쪽 SHIFT 키가 눌러졌습니다.";
        str += "<br>";
    }

    if(e.ctrlKey) {
        if(e.ctrlLeft) str += "왼쪽 CTRL 키가 눌러졌습니다";
        else str += "오른쪽 CTRL 키가 눌러졌습니다.";
        str += "<br>";
    }

    str += String.fromCharCode(e.keyCode) + "키가 눌러졌습니다."
    div.innerHTML = str;
}
var timerID = null;

function startTimer(time) {
    timerID = setTimeout("load('http://www.naver.com')", time);
    document.getElementById("img").title = "타이머 작동 시작...";
}

function cancelTimer() {
    if(timerID != null)
        clearTimeout(timerID);
}

function load(url) {
    window.location = url;
}
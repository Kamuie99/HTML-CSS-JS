function printProperties() {
    document.getElementById("input").focus();

    text += "1. location = " + document.location + "\n";
    text += "2. URL = " + document.URL + "\n";
    text += "3. title = " + document.title + "\n";
    text += "4. head의 id = " + document.head.id + "\n";
    text += "5. body color = " + document.body.style.color + "\n";
    text += "6. domain = " + document.domain + "\n";
    text += "7. lastModified = " + document.lastModified + "\n";
    text += "8. defaultView = " + document.defaultView + "\n";
    text += "9. 문서의 로드 완료 후 readyState = " + document.readyState + "\n";
    text += "10. referrer = " + document.referrer + "\n";
    text += "11. activeElement = " + document.activeElement.value + "\n";
    text += "12. documentElement의 태그 이름 = " + document.documentElement.tagName + "\n";
    
    alert(text);
}
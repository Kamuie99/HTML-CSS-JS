var username = GetCookie("username");
var count = GetCookie("count");
var expire = new Date ();
if (username == null) {
    count = 0;
    username = prompt("이름을 입력해 주십시오", "");
    if(username == null) {
        alert("이름을 입력하시면 보다 나은 서비스를 제공받을 수 있습니다.");
        username = "아무개";
    } else {
        expire.setTime(expire.getTime() + (365 * 24 * 3600 * 1000));
        SetCookie("count", count.expire);
        document.write('<p> 어서오십시오. ' + username + '님의 ' + count +
        '번째 방문을 환영합니다!');
    }
}

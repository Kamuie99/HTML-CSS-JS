var ques = randomInt() + "*" + randomInt();

var user = prompt(ques + "값은 얼마입니까?", 0);

if (user==null) {
    document.write("구구단 연습을 종료합니다");
}
else {
    var ans = eval(ques);
    if(ans == user)
        document.write("정답! ");
    else
        document.write("오답! ");
    document.write(ques + "=" + "<strong>" + ans + "</strong>입니다<br>");
}
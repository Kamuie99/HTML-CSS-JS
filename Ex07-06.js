var current = new Date();
if(current.getSeconds()%2 == 0)
    document.body.style.backgroundColor = "violet";
else
    document.body.style.backgroundColor = "lightskyblue";

document.write("현재 시간: ");
document.write(current.getHours(), "시 ");
document.write(current.getMinutes(), "분 ");
document.write(current.getSeconds(), "초 ");

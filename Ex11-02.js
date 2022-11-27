var canvas = doucument.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.beginPath();
context.strokeStyle = "blue";
context.rect(30, 30, 50, 50);
context.stroke();

context.beginPath();
context.fillStyle = "violet";
context.rect(60, 60, 50, 50);
context.fill();

context.font = "20px Gothic";
context.fillStyle = "green";
context.fillText = ("Text in Canvas", 100, 50);
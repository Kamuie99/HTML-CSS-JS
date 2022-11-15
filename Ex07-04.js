var a = new Array("황", "김", "이");
var b = new Array("박");
var c;

pr("배열 a= ", a);
pr("배열 b= ", b);
document.write("<hr>");

c = a.concat(b);
pr("c = a.concat(b) 후 c = ", c);
pr("c = a.concat(b) 후 a = ", a);

c = a.join("##");
pr("c = a.join(b) 후 c = ", c);
pr("c = a.join(b) 후 a = ", a);

c = a.reverse(b);
pr("c = a.reverse(b) 후 c = ", c);
pr("c = a.reverse(b) 후 a = ", a);

c = a.slice(1, 2);
pr("c = a.slice(b) 후 c = ", c);
pr("c = a.slice(b) 후 a = ", a);

c = a.sort(b);
pr("c = a.sort(b) 후 c = ", c);
pr("c = a.sort(b) 후 a = ", a);

c = a.toString();
document.write("a.toString() : " + c);


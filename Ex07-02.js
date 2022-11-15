var plots = [20, 5, 8, 15, 20];

document.write("var plots = [20, 5, 8, 15, 20] <br>");

for(i=0; i<5; i++){
    var size=plots[i];
    while(size>0){
        document.write("*");
        size--;
    }
    document.write(plots[i] + "<br>");
}

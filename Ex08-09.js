var win = null;
function showHTML() {
    if(win==null || win.closed)
        win = window.open("", "outwin", "width=300, height=200");
    
    var textArea = document.getElementById("srcText");
    win.document.open();
    win.document.write(textArea.value);
    win.document.close();
}
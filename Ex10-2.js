var newWin = null;
function load(URL) {
    newWin = window.open(URL, "myWin", "left=300,top=300,width=400,height=300");
}
function closeNewWindow() {
    if(newWin==null || newWin.closed)
        return;
    else
        newWin.close();
}
function createDIV() {
    var obj = document.getElementById("parent");
    var newDIV = document.createElement("div");
    newDIV.innerHTML = "새로 생성된 DIV입니다.";
    newDIV.setAttribute("id", "myDiv");
    newDIV.style.backgroundColor = "yellow";
    newDIV.addEventListener("click", 
            function() {
                var p = this.parentElement;
                p.removeChild(this);
            });
    obj.appendChild(newDIV);
}
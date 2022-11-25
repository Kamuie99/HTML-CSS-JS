window.onbeforeprint = function (e) {
    logoDiv = document.getElementById("logoDiv");
    logoDiv.style.display = "block";
}

window.onafterprint = hideLogo;

function hideLogo() {
    logoDiv = document.getElementById("logoDiv");
    logoDiv.style.display = "none";
    logoDiv.style.zlndex = -1;
}
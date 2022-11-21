var sum = 0;
function calc(cBox) {
    if (cBox.checked)
        sum += parseInt(cBox.value);
    else
        sum -= parseInt(cBox.value);
    document.getElementById("sumtext").value = sum;
}
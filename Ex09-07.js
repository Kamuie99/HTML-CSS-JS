function query() {
    var ret = confirm("네이버로 이동하시겠습니까?");
    return ret;
}

function noAction(e) {
    e.preventDefault();
}
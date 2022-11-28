function GetCookie (name) {
    var str = name + "=";
    var pairs = document.cookie.split(";");
    for(var i=0; i<pairs.length; i++){
        var pair = pairs[i].trim();
        var unit = pair.split("=");
        if(unit[0] == name)
            return unescape(unit[1]);
    }
    return null;
}

function SetCookie (name, value, expireDate) {
    var cookieStr = name + "=" + escape(value) +
    ((expireDate == null)?"":("; expires=" + expireDate.toGMTstring()));
    document.cookie = cookieStr;
}
function hideMenu() {
    alert("오른쪽 클릭<컨텍스트 메뉴>금지");
    return false;
}

document.oncontextmenu = hideMenu;
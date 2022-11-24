function startScroll(interval) {
    setInterval("autoScroll()", interval);
}

function autoScroll() {
    window.scrollBy(0, 10);
}
window.addEventListener('load', (event) => {
    var renderedcar = document.querySelector('img[src*="render-vehicle"]');
    renderedcar.style.transform = "rotate(" + (Math.random() * 360).toString() + "deg)";
});

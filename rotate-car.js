window.addEventListener('load', (event) => {
    var renderedCar = document.querySelector('img[src*="render-vehicle"]');
    var chance = Math.random() * 100;
    if (chance > 75)
    {
        renderedCar.style.animationName = "teslascope_car_rotator_spin";
        renderedCar.style.animationIterationCount = "infinite";
        var duration;
        var timing;

        chance = Math.random() * 100;
        if (chance > 50)
        {
            duration = "3000ms";
            timing = "ease-in-out";
        }
        else
        {
            duration = (Math.random() * 10000).toString() + "ms";
            timing = "linear";
        }
        renderedCar.style.animationDuration = duration;
        renderedCar.style.animationTimingFunction = timing;
    }
    else
    {
        renderedCar.style.transform = "rotate(" + (Math.random() * 360).toString() + "deg)";
    }
});

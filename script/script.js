window.addEventListener('DOMContentLoaded', function () {

    //clock

    setInterval(setClock, 1000)
    let hourHand = document.querySelector('.js-hour'),
        minuteHand = document.querySelector('.js-minute'),
        secondHand = document.querySelector('.js-second');

    function setClock() {
        let curDate = new Date(),
            secondsRatio = curDate.getSeconds() / 60,
            minutesRatio = (secondsRatio + curDate.getMinutes()) / 60,
            hoursRatio = (minutesRatio + curDate.getHours()) / 12;
        setRotation(secondHand, secondsRatio)
        setRotation(minuteHand, minutesRatio)
        setRotation(hourHand, hoursRatio)
    }

    function setRotation(el, rotationRatio) {
        el.style.setProperty('--rotation', rotationRatio * 360)
    }

    //parallax
    let container = document.querySelector('.container'),
        parallax = document.querySelector('.parallax'),
        fog = document.querySelector('.parallax--fog'),
        mountain1 = document.querySelector('.parallax--mountain_1'),
        mountain2 = document.querySelector('.parallax--mountain_2'),
        mountain3 = document.querySelector('.parallax--mountain_3');
    window.addEventListener('scroll', function () {
        let topPix = this.scrollY,
            width = this.innerWidth,
            height = container.clientHeight,
            parallaxHeight = parallax.clientHeight,
            p = topPix / height * 100,
            pTop = topPix / parallaxHeight * 100,
            opacity = 1 - 1 / 100 * pTop,
            zoom1 = 1 + (width / 10000 * pTop),
            zoom2 = 1 + (width / 4000000 * p),
            zoom3 = 1 + (width * 0.000005 * pTop),
            zoom4 = 1 + (width * 0.00001 * pTop),
            hr1 = width / 2000 * pTop,
            hr2 = width / 1500 * pTop;


        fog.style.transform = 'scale(' + zoom1 + ')';
        fog.style.opacity = opacity;

        mountain1.style.transform = 'scale(' + zoom2 + ')';

        mountain2.style.transform = 'scale(' + zoom3 + ') translate3d(' + hr1 + 'px,0,0)';

        mountain3.style.transform = 'scale(' + zoom4 + ') translate3d(' + hr2 + 'px,0,0)';

    })







});
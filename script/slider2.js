let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0; // текущий слайд отображаемый на экране
let playing = true; // true - слайды двигаются автоматически, false - двигаются в ручную
let btnNext = document.getElementById('next');
let btnPrevious = document.getElementById('previous');
let btnPause = document.getElementById('pause');
let timer = setInterval(nextSlide, 2000);


// n - номер слайда
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length; // данная формула учитывает циклический сдвиг при движении справа на лево и наоборот
    slides[currentSlide].className = 'slide showing';
}

function nextSlide() {
    goToSlide(currentSlide + 1); // вызываем функцию передавая ей номер следуещего слайда ,который отличается от текущего на единицу (+1)
}

function previousSlide() {
    goToSlide(currentSlide - 1); // вызываем функцию передавая ей номер ghtlsleotuj слайда ,который отличается от текущего на единицу (-1)
}

function pauseSlideShow() {
    btnPause.value = 'play'; // меняем при нажатии на кнопку надпись на "play"
    playing = false;
    clearInterval(timer);
}

function playSlideShow() {
    btnPause.value = 'pause';
    playing = true;
    timer = setInterval(nextSlide, 2000);
}

//  вешаем событие на btnPause, если было проигрывание ,то останавливаем проигрывание , иначе запускаем проигрывание
btnPause.onclick = function() {
    if (playing) {
        pauseSlideShow();
    } else {
        playSlideShow();
    }
};

btnNext.onclick = function() {
    pauseSlideShow();
    nextSlide();
}

btnPrevious.onclick = function() {
    pauseSlideShow();
    previousSlide();
}

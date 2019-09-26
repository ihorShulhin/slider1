// let slides = document.querySelectorAll('#slides .slide');
// let currentSlide = 0; // первый из демонстрируемых слайдов под индексом 0
//
// function nextSlide() {
//     slides[currentSlide].className = 'slide'; // текущему слайду , который был отображен , назначем класс "slide" содержащий  нулевую прозрачность
//
//     currentSlide = (currentSlide + 1) % slides.length; // для циклического перехода последнего слайда на первый , за счёт взятия остатка от деления на общее число слайдов
//
//     slides[currentSlide].className = 'slide showing';
// }
//
// setInterval(nextSlide, 2000); // setInterval - работает таким образом , он отсчитует интервал повторного запуска экземпляра функции от момента начала её запуска.


let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;

setInterval(function() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';

}, 2000);

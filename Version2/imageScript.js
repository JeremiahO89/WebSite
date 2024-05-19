let currentIndex = 0;

function showSlide(index, currentSlide) {
    const items = "."+currentSlide+"-item";
    const slides = document.querySelectorAll(items);
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const inner = "."+currentSlide+"-inner";
    const carouselInner = document.querySelector(inner);
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide(currentSlide) {
    showSlide(currentIndex + 1, currentSlide);
}

function prevSlide(currentSlide) {
    showSlide(currentIndex - 1, currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
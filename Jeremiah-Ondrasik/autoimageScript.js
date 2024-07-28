let currentIndex = 0;
const timerInterval = setInterval(() => autoNextSlide('home'), 2000);

function showSlide(index, currentSlide) {
    const items = "." + currentSlide + "-item";
    const slides = document.querySelectorAll(items);
    if (index >= slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const inner = "." + currentSlide + "-inner";
    const carouselInner = document.querySelector(inner);
    carouselInner.style.transform = `translateX(-${currentIndex * 95}%)`; 
    // use to be 100 changed to 95 for better image viewing

}

function autoNextSlide(currentSlide) {
    showSlide(currentIndex + 1, currentSlide);
}

autoNextSlide('home');

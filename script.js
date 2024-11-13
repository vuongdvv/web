const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const testimonialList = document.querySelector('.testimonial-list');
let currentIndex = 0;

function updateCarousel() {
    const testimonialWidth = testimonialList.children[0].offsetWidth;
    testimonialList.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`;
}

rightArrow.addEventListener('click', () => {
    if (currentIndex < testimonialList.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; 
        updateCarousel();
    }
});



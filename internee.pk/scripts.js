document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const slideInterval = 2000; // Auto-play interval in milliseconds

    const showSlide = index => {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        carousel.style.transform = `translateX(${-index * 100}%)`;
        currentIndex = index;
    };

    const nextSlide = () => showSlide(currentIndex + 1);
    const prevSlide = () => showSlide(currentIndex - 1);

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    let autoPlay = setInterval(nextSlide, slideInterval);

    const stopAutoPlay = () => clearInterval(autoPlay);
    const startAutoPlay = () => {
        autoPlay = setInterval(nextSlide, slideInterval);
    };

    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    showSlide(currentIndex);

    // Navbar toggle functionality
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

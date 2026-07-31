/**************************************
 * script.js (EXTERNAL FILE)
 **************************************/

// ============================
//  SELECT ELEMENTS
// ============================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const profileContainer = document.querySelector('.profile-container');
const topBtn = document.querySelector('.back-to-top');
const fadeElements = document.querySelectorAll('.fade-in');


// ============================
// 1. NAVBAR SHRINK ON SCROLL
// ============================
window.addEventListener('scroll', () => {
    navbar.classList.toggle('shrink', window.scrollY > 50);
    topBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});


// ============================
// 2. MOBILE MENU TOGGLE
// ============================
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); 
});


// ============================
// 3. PROFILE DROPDOWN
// ============================
profileContainer.addEventListener('click', () => {
    profileContainer.classList.toggle('active');
});

window.addEventListener('click', (e) => {
    if (!profileContainer.contains(e.target)) {
        profileContainer.classList.remove('active');
    }
});


// ============================
// 4. BACK TO TOP BUTTON
// ============================
topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ============================
// 5. FADE-IN ANIMATIONS
// ============================
function revealOnScroll() {
    fadeElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (position < triggerPoint) element.classList.add('visible');
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// ============================
// 6. LOADER SCREEN (FIXED)
// ============================
// REQUIREMENT: HTML must be:
// <div id="loader" class="loader">
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (!loader) return;  // prevents breaking

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 500);
});

// ============================
// 7. SWIPER SLIDER
// ============================
document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.myEventsSlider', {
        loop: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
});
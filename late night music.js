document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const topBtn = document.querySelector('.back-to-top');
    const fadeElements = document.querySelectorAll('.fade-in');
    const heroImgDiv = document.querySelector('.hero-img');
    const galleryThumbs = document.querySelectorAll('.gallery img');

    // NAVBAR + TOP BUTTON
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('shrink', window.scrollY > 50);
        topBtn.style.display = window.scrollY > 250 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // MOBILE MENU
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // FADE-IN EFFECT
    function reveal() {
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 80) {
                el.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", reveal);
    reveal();

    // HERO IMAGE SWITCH ON CLICK
    let defaultHero = heroImgDiv.style.backgroundImage;

    galleryThumbs.forEach(img => {
        img.addEventListener("click", () => {
            heroImgDiv.style.backgroundImage = `url('${img.src}')`;
        });
    });

    // AUTO SLIDER
    let index = 0;
    setInterval(() => {
        if (galleryThumbs.length === 0) return;

        index = (index + 1) % galleryThumbs.length;
        heroImgDiv.style.backgroundImage = `url('${galleryThumbs[index].src}')`;
    }, 4000);

    // LOADER
    window.addEventListener("load", () => {
        const loader = document.getElementById("loader");
        setTimeout(() => loader.classList.add("hidden"), 400);
    });

});
// ===============================
// АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ
// ===============================

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// ===============================
// ПОДСВЕТКА АКТИВНОГО РАЗДЕЛА
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-btn");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});


// ===============================
// БУРГЕР-МЕНЮ + OVERLAY
// ===============================

const burger = document.getElementById("burger");
const nav = document.querySelector("nav");
const overlay = document.getElementById("overlay");

// Открытие / закрытие меню
burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    overlay.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
});

// Закрытие при клике на затемнение
overlay.addEventListener("click", () => {
    nav.classList.remove("open");
    overlay.classList.remove("show");
    document.body.classList.remove("no-scroll");
});

// Закрытие при выборе пункта меню
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        overlay.classList.remove("show");
        document.body.classList.remove("no-scroll");
    });
});


// ===============================
// ЗАКРЫТИЕ МЕНЮ ПРИ ИЗМЕНЕНИИ РАЗМЕРА ЭКРАНА
// ===============================

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("open");
        overlay.classList.remove("show");
        document.body.classList.remove("no-scroll");
    }
});

// Затемнение меню при прокрутке
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header-main");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
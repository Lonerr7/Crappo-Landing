'use strict';

// Burger-menu
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.navigation__link');

// Удаление 75% save блока
const saveBlock = document.querySelector('.section-hero__save-block');
const parentBlock = document.querySelector('.section-hero__info');

// Menu-fade
const logo = document.querySelector('.logo');
const headerWrapper = document.querySelector('.header__wrapper');

// Revealing Elements on Scroll
const allSections = document.querySelectorAll('.section');

//* Удаление элемента в hero секции и его замена

function deleteSaveBlock(element) {
    element.remove();
}

$(window).resize(function() {
    if( $(this).width() <= 356) {
        deleteSaveBlock(saveBlock);
    }
});   

//* Menu fade animation

function handleHover(op) {
    return function(e) {
        if (e.target.classList.contains('navigation__link')) {
            const siblings = document.querySelectorAll('.navigation__link');
    
            siblings.forEach(item => {
                if (item != e.target) {
                    item.style.opacity = op;
                }
            });
            logo.style.opacity = op;
        }
    }   
}

headerWrapper.addEventListener('mouseover', handleHover(0.5));

headerWrapper.addEventListener('mouseout', handleHover(1));

// //* Revealing Elements on Scroll

// function showSection(entries, observer) {
//     const [entry] = entries;
//     console.log(entry);

//     if (entry.isIntersecting) {
//         entry.target.classList.remove('section-hidden');
//         observer.unobserve(entry.target);
//     }
// }

// const observer = new IntersectionObserver(showSection, {
//     root: null,
//     threshold: 0.1,
// });

// allSections.forEach(section => {
//     observer.observe(section);
//     section.classList.add('section-hidden')
// });

//* Menu-burger

burger.addEventListener('click', (e) => {
    e.preventDefault();

    const clicked = e.target.closest('.header__burger');
    if(!clicked) return;

    clicked.classList.toggle('header__burger-icon_active');

    nav.classList.toggle('visible');
    body.classList.toggle('_lock');
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // e.preventDefault();
        body.classList.remove('_lock');
        nav.classList.remove('visible');
        burger.classList.remove('header__burger-icon_active');
        logo.style.opacity = 1;
    });
})

//* Smooth scrolling

const scrollFormNav = new SmoothScroll('a[href*="#"]', {
    speed: 800
});

'use strict';

// Burger-menu
const burgerIcon = document.querySelector('.header__burger-icon');

// Удаление 75% save блока
const saveBlock = document.querySelector('.section-hero__save-block');
const parentBlock = document.querySelector('.section-hero__info');

// Menu-fade
const headerWrapper = document.querySelector('.header__wrapper');

// Revealing Elements on Scroll
const allSections = document.querySelectorAll('.section');

//* Menu-burger

burgerIcon.addEventListener('click', (e) => {
    e.preventDefault();

    burgerIcon.classList.toggle('header__burger-icon_active');
});

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
            const logo = document.querySelector('.logo');
    
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

//* Revealing Elements on Scroll

function showSection(entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (entry.isIntersecting) {
        entry.target.classList.remove('section-hidden');
        observer.unobserve(entry.target);
    }
}

const observer = new IntersectionObserver(showSection, {
    root: null,
    threshold: 0.1,
});

allSections.forEach(section => {
    observer.observe(section);
    section.classList.add('section-hidden')
});
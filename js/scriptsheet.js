// Burger-menu

const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const menu = document.querySelector('.nav__list');
    const navItem = document.querySelectorAll('.nav__item');

    burger.addEventListener('click', () => {
        // Toggle Nav
        menu.classList.toggle('nav__list--active');
        burger.classList.toggle('nav__burger--active')
        // Animate links In
        navItem.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {            
                link.style.animation = `navItemFadeIn 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });
}

navSlide();
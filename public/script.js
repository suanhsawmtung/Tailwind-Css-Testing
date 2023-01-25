const burger = document.querySelector('#burger');
const cross = document.querySelector('#cross');
const navs = document.querySelectorAll('#nav');
const navBar = document.querySelector('#nav-bar');

// When click burger icon, hide burger, show cross and show hidden nav items //
burger.addEventListener('click', () => {
    cross.classList.remove('hidden');
    burger.classList.add('hidden');
    navs.forEach(nav => {
        if (nav.classList.contains('hidden')) {
            nav.classList.remove('hidden');
        }
    });
});

// When click cross icon, hide cross, show burger and hide back all nav items //
cross.addEventListener('click', () => {
    burger.classList.remove('hidden');
    cross.classList.add('hidden');
    navs.forEach(nav => {
        nav.classList.add('hidden');
    });
});

// When scroll screen, change transparent background color of nav bar to color to seperate other items //
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navBar.classList.add('bg-travel', 'shadow-2xl');
    } else {
        navBar.classList.remove('bg-travel', 'shadow-2xl');
    }
});
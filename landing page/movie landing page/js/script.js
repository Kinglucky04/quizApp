const menuBtn = document.getElementById('menu_btn');
const navLinks = document.getElementById('nav_links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');

    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-3-line');

    navLinks.addEventListener('click', () => {

        navLinks.classList.remove('open');
        navLinks.setAttribute('class', 'ri-menu-line');
    });
});
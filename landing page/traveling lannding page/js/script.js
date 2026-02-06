const menuBtn = document.getElementById('menu_btn');
const navLinks = document.getElementById('nav_links')
const menuBtnIcon = document.querySelector('i');


menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});


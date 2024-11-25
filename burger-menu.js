const burgerMenu = document.getElementById("burger-menu");
const burgerIcon = document.getElementById("burger-icon");
const burgerLinks = document.querySelectorAll('.burger-menu a');

const toggleMenu = () => {
    const show = !burgerMenu.classList.contains('show');
    burgerMenu.classList.toggle('show', show);
    burgerIcon.classList.toggle('active', show);

    document.body.classList.toggle('no-scroll', show);
};

burgerIcon.addEventListener('click', toggleMenu);

burgerLinks.forEach(link => link.addEventListener('click', () => {
    burgerMenu.classList.remove('show');
    burgerIcon.classList.remove('active');
    document.body.classList.remove('no-scroll');
}));

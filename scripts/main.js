document.querySelector('.hamburger-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');
});

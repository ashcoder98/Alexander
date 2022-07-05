const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const name = document.getElementById('name');
const title = document.getElementById('title')
const passion = document.getElementById('passion')

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});


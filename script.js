const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const navUL = document.getElementById('nav-ul');
const name = document.getElementById('name');
const title = document.getElementById('title')
const passion = document.getElementById('passion')

hamburger.addEventListener('click', () => {
    hamburger.classList.add('hide')
    navUL.classList.add('show');
    close.classList.remove('hide')
});

close.addEventListener('click', () => {
    close.classList.add('hide');
    hamburger.classList.remove('hide');
    navUL.classList.remove('show');
})


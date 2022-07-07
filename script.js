const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const navUL = document.getElementById('nav-ul');
const name = document.getElementById('name');
const title = document.getElementById('title');
const passion = document.getElementById('passion');
const short = document.getElementById('short');
const medium = document.getElementById('medium');
const long = document.getElementById('long');
const shortp = document.getElementById('shortp');
const mediump = document.getElementById('mediump');
const longp = document.getElementById('longp');




hamburger.addEventListener('click', () => {
    hamburger.classList.add('hide')
    navUL.classList.add('show');
    close.classList.remove('hide')
});

close.addEventListener('click', () => {
    close.classList.add('hide');
    hamburger.classList.remove('hide');
    navUL.classList.remove('show');
});





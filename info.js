short.addEventListener('click', () => {
    shortp.classList.remove('hide');
    shortp.classList.add('show');
    mediump.classList.remove('show');
    mediump.classList.add('hide');
    longp.classList.remove('show');
    longp.classList.add('hide');
    console.log('short')
});
medium.addEventListener('click', () => {
    mediump.classList.remove('hide');
    mediump.classList.add('show');
    shortp.classList.remove('show');
    shortp.classList.add('hide');
    longp.classList.remove('show');
    longp.classList.add('hide');
    console.log('medium');
});
long.addEventListener('click', () => {
    longp.classList.remove('hide');
    longp.classList.add('show');
    mediump.classList.remove('show');
    mediump.classList.add('hide');
    shortp.classList.remove('show');
    shortp.classList.add('hide');
    console.log('long')
});
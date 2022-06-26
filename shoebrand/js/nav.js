let open = document.querySelector('.open');
let close = document.querySelector('.close');
let nav = document.querySelector('nav');


open.addEventListener('click' , function() {
    nav.classList.add('nav-open');
});


close.addEventListener('click' , function() {
    nav.classList.remove('nav-open');
})
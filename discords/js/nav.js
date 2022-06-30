let nav = document.querySelector(".mobile-nav");
let open = document.querySelector(".open");
let close = document.querySelector(".close");


open.addEventListener('click' , function(){
nav.classList.add('open-nav')
});


close.addEventListener('click' , function(){
    nav.classList.remove('open-nav')
    });
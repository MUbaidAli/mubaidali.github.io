let toggleBtn = document.querySelector('.open');
let nav = document.querySelector('#primary-nav');


toggleBtn.addEventListener("click" , function (){
    console.log("click");
    nav.classList.toggle('open-nav')
})
const click =document.querySelector(".clickme");
const MeImg =document.querySelector(".meimg");
const content =document.querySelector(".content2");
const overflow =document.querySelector("body");
click.addEventListener('click',e=>{
    MeImg.classList.add("meimg2");
    click.style.display="none";
    content.classList.add("visible");
    overflow.classList.add('overflow')
})


//services
/*
const openning = document.querySelector('.btn');
const closing = document.querySelector('#xmark');
const modal = document.querySelector('.coding-open');


openning.addEventListener('click',function(){
    modal.style.visibility="visible";
});

closing.addEventListener('click',function(){
    modal.style.visibility="hidden";
})
*/


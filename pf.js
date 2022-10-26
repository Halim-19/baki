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

/*scroll button*/
const topLink = document.querySelector('.scrollbtn');

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
topLink.addEventListener('click',function(){
    window.scrollTo({
        left:0,
        top:0,
      })
})

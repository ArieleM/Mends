const navMenu = document.querySelector(".nav");
const btns = navMenu.querySelectorAll(".nav__button");

for(let i=0 ; i< btns.length; i++){
  btns[i].addEventListener("click", ()=>{
    let current = document.getElementsByClassName("active");
    current[0].className= current[0].className.replace("active", "");
    btns[i].classList.add("active");
  })
}
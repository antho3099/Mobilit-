let bow = document.querySelector(".money span");
let form = document.querySelector("form");

function menuofcard(){

    bow.style.transform = "rotate(0.2turn)";
    form.classList.toggle("display"); 
}  
bow.addEventListener("click", menuofcard);

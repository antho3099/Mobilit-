let bow = document.querySelector(".money span");
let billreturn = document.querySelector(".headercard span")
let helpnotice = document.querySelector("#help");
let help = document.querySelector(".help");
let helpnotice2 = document.querySelector("#help2");
let help2 = document.querySelector(".helptwo")
let end = document.querySelector(".help .croix");
let end2 = document.querySelector(".helptwo .croix");
let getback = document.querySelector("#return");
let accepted = document.querySelector(".accepted");
let off = document.querySelector("#close");
let validate = document.querySelector("#valider");
let form = document.querySelector("form");
let cardinput = document.querySelector("#cardnumber");
let inputdate = document.querySelector("#datenumber");
let dating = document.querySelector("#date");
let cryptoinput = document.querySelector("#crypto");


function menuofcard(){
    bow.style.transform = "rotate(0.2turn)";
    payform.classList.toggle("display"); 
}  
bow.addEventListener("click", menuofcard);

billreturn.addEventListener('click', function(){
    header4.style.display = "none";
    header3.style.display = "block";
    bills.style.display = "block";
    payform.style.display = "none";
    payment.style.display = "none";
    check.style.display = "block";
    paid.style.display = "block";
})

helpnotice.addEventListener('click', function(){
    help.style.display = "block";
})
helpnotice2.addEventListener('click', function(){
    help2.style.display = "block";
})
end.addEventListener('click', function(){
    help.style.display = "none";
})
end2.addEventListener('click', function(){
    help2.style.display = "none";
})

getback.addEventListener("click", function(){{
    footer.style.display = "block";
    notice.style.display = "block";
    header1.style.display = "block";
    shop.style.display = "block";
    payform.style.display = "none";
    header4.style.display = "none";
    payment.style.display = "none";
}})
validate.addEventListener('click', function(){

    payform.style.display = "none";
    header4.style.display = "none";
    payment.style.display = "none";
    header3.style.display = "block";
    footer.style.display = "none";
    notice.style.display = "none";
    header1.style.display = "none";
    shop.style.display = "none";
    accepted.style.display = "block";
    off.style.display = "block";

})

let shop = document.querySelector(".letadd");
let shopping = document.querySelector(".addticket");
let footer = document.querySelector("footer");
let header2 = document.querySelector(".headertwo");
let stop = document.querySelector(".croix");
let notice = document.querySelector(".none");
let header1 = document.querySelector(".headerone");


function goShop(){
    header2.style.display = "block";
    footer.style.display = "none";
    shopping.style.display = "block";
    notice.style.display = "none";
    header1.style.display = "none";
    



}
shop.addEventListener('click', goShop);

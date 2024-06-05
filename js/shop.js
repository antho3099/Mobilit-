let shop = document.querySelector(".letadd");
let shopping = document.querySelector(".addticket");
let footer = document.querySelector("footer");
let header2 = document.querySelector(".headertwo");
let stop = document.querySelector(".croix");
let notice = document.querySelector(".none");
let header1 = document.querySelector(".headerone");
let buy = document.querySelector("#letbuy")
let lot = document.querySelector('.total');

function goShop(){
    header2.style.display = "block";
    footer.style.display = "none";
    shopping.style.display = "block";
    notice.style.display = "none";
    header1.style.display = "none";
    shop.style.display = "none";
    lot.style
}
shop.addEventListener('click', goShop);

function back(){
    header2.style.display = "none";
    footer.style.display = "block";
    shopping.style.display = "none";
    notice.style.display = "block";
    header1.style.display = "block";
    shop.style.display = "block";
    buy.style.display = "none"
}
stop.addEventListener('click', back);


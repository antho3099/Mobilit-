let btnMore = document.querySelector(".add1 .more");
let btnMore2 = document.querySelector(".add2 .more");
let btnLess = document.querySelector(".add1 .low");
let btnLess2 = document.querySelector(".add2 .low");
let count = document.querySelector("#number")
let count2 = document.querySelector(".add2 #number")
let result = (count.innerText);
let incrementation = 0;
let bought = document.querySelector("#letbuy")
let bills = document.querySelector('.bills');
let header3 = document.querySelector('.headerforbuy');
let backup = document.querySelector(".twospans")
let paid = document.querySelector("#paid");
let cost = 1.20;
let tencost = 9.00;
let moneylot = document.querySelector("#tips");
let lotofmoney = document.querySelector(".lot");
let bill = document.querySelector(".bill");
let cash = document.querySelector("#cashone");
let rich = document.querySelector("#rich")
let oppay = document.querySelector(".cash")
let mont = document.querySelector("#gold")

btnMore.addEventListener('click', function(){
    result = ++incrementation ;
    count.innerText = result;
    bought.style.display = "block";
    let total = incrementation * cost;
    moneylot = total;
    cash.innerText = moneylot;
    oppay.style.display = 'block';
})
btnLess.addEventListener('click', function(){
    result = --incrementation;
        count.innerHTML = result;
        bought.style.display = "none";
        let total = incrementation * cost;
        moneylot = total;
        cash.innerText = moneylot;
        oppay.style.display = "none";
})
btnMore2.addEventListener('click', function(){
    result = ++incrementation ;
    count2.innerText = result;
    bought.style.display = "block";
    let total = incrementation * tencost;
    moneylot = total;
    cash.innerText = moneylot;
    oppay.style.display = 'block';
})
btnLess2.addEventListener('click', function(){
    result = --incrementation;
    count2.innerHTML = result;
    bought.style.display = "none";
    let total = incrementation * tencost;
    moneylot = total;
    cash.innerText = moneylot;
    oppay.style.display = "none";
})
bought.addEventListener('click', function(){
    shopping.style.display = "none";
    bills.style.display = "block";
    header2.style.display = "none";
    header3.style.display = "block";
    bought.style.display = "none";
    paid.style.display = "block";
    rich.innerText = moneylot;
    oppay.style.display = "none";
    gold.innerText = moneylot; 

})
backup.addEventListener('click', function(){
    shopping.style.display = "block";
    bills.style.display = "none";
    header2.style.display = "block";
    header3.style.display = "none";
    bought.style.display = "block";
    paid.style.display = "none";
})
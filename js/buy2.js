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
let one = "1 Voyage Aix en Bus";
let ten = "10 Voyages Aix "
let info = document.querySelector("#info1");
let info2 = document.querySelector("#info2");
let inforesult = document.querySelector("#inforesult");
let quantity = document.querySelector("#quantity");


btnMore.addEventListener('click', function(){
    result = ++incrementation ;
    count.innerText = result;
    bought.style.display = "block";
    let total = incrementation * cost;
    moneylot = total;
    cash.innerText = moneylot.toFixed(2);
    oppay.style.display = 'block';
    inforesult.innerHTML = one;
    travel.innerHTML = one;
    quantity.innerText = "x" + result;
    if(result == 0){
        bought.style.display = "none";
        oppay.style.display = "none";
    }
    else if(result < 0){
        bought.style.display = "none";
        oppay.style.display = "none";
    }
    else{
        bought.style.display = "block";
        oppay.style.display = "block";
    }
})
btnLess.addEventListener('click', function(){
    result = --incrementation;
    count.innerHTML = result;
    let total = incrementation * cost;
    moneylot = total;
    cash.innerText = moneylot.toFixed(2);
    if(result == 0){
        bought.style.display = "none";
        oppay.style.display = "none";
    }
    else if(result < 0){
        bought.style.display = "none";
        oppay.style.display = "none";
    }
    else{
        bought.style.display = "block";
        oppay.style.display = "block";
    }
})
btnMore2.addEventListener('click', function(){
    result = ++incrementation ;
    count2.innerText = result;
    bought.style.display = "block";
    let total = incrementation * tencost;
    moneylot = total;
    cash.innerText = moneylot.toFixed(2);
    oppay.style.display = 'block';
    inforesult.innerHTML = ten;
    travel.innerHTML = ten;
    quantity.innerText = "x" + result;
    if(result == 0){
        bought.style.display = "none";
        oppay.style.display = "none";
    }
    else if(result < 0){
        bought.style.display = "none";
        oppay.style.display = "none";
    }
    else{
        bought.style.display = "block";
        oppay.style.display = "block";
    }

})
btnLess2.addEventListener('click', function(){
    result = --incrementation;
    count2.innerHTML = result;
    let total = incrementation * tencost;
    moneylot = total;
    cash.innerText = moneylot.toFixed(2);
    if(result == 0){
        bought.style.display = "none";
        oppay.style.display = "none";
    }
    else if(result < 0){
        bought.style.display = "none";
        oppay.style.display = "none";
    }
    else{
        bought.style.display = "block";
        oppay.style.display = "block";
    }
})
bought.addEventListener('click', function(){
    shopping.style.display = "none";
    bills.style.display = "block";
    header2.style.display = "none";
    header3.style.display = "block";
    bought.style.display = "none";
    paid.style.display = "block";
    rich.innerText = moneylot.toFixed(2);
    oppay.style.display = "none";
    gold.innerText = moneylot.toFixed(2); 

})
backup.addEventListener('click', function(){
    shopping.style.display = "block";
    bills.style.display = "none";
    header2.style.display = "block";
    header3.style.display = "none";
    bought.style.display = "block";
    paid.style.display = "none";
})
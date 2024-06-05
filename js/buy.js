let btnMore = document.querySelectorAll(".more");
let btnLess = document.querySelectorAll(".low");
let count = document.querySelector("#number")
let result = (count.innerText);
let incrementation = 0;
let bought = document.querySelector("#letbuy")
let bills = document.querySelector('.bills');
let header3 = document.querySelector('.headerforbuy');
let backup = document.querySelector(".twospans")
let paid = document.querySelector("#paid")


for(let m of btnMore){
    m.addEventListener('click', function(){
        result = ++incrementation ;
        count.innerText = result;
        bought.style.display = "block";
       
    })
};
for(let l of btnLess){
    l.addEventListener('click', function(){
        result = --incrementation;
        count.innerHTML = result;
        bought.style.display = "none";
    })
}

bought.addEventListener('click', function(){
    shopping.style.display = "none";
    bills.style.display = "block";
    header2.style.display = "none";
    header3.style.display = "block";
    bought.style.display = "none";
    paid.style.display = "block";

})
backup.addEventListener('click', function(){
    shopping.style.display = "block";
    bills.style.display = "none";
    header2.style.display = "block";
    header3.style.display = "none";
    bought.style.display = "block";
    paid.style.display = "none";
})

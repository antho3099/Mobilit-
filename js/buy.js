let btnMore = document.querySelectorAll(".more");
let btnLess = document.querySelectorAll(".low");
let count = document.querySelector("#number")
let result = (count.innerText);
let incrementation = 0;
let bought = document.querySelector("#letbuy")


for(let m of btnMore){
    if(incrementation == 0){

    }
    m.addEventListener('click', function(){
        result = ++incrementation ;
        count.innerText = result;
    })
};
for(let l of btnLess){
    l.addEventListener('click', function(){
        result = --incrementation;
        count.innerHTML = result;
    })
}




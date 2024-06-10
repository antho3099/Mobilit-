let getReturn = document.querySelector("#close");
let travel = document.querySelector("#travel");
let numbercard = document.querySelector("#numbercard");
let cardfile = document.querySelector(".card");

getReturn.addEventListener('click', function(){
    header1.style.display = "block";
    accepted.style.display = "none";
    off.style.display = "none";
    header3.style.display = "none";
    cardfile.style.display = "block";
    footer.style.display = "block";
})


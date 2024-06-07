let titlemoney = document.querySelector(".money h3");
let french = document.getElementById("french");
let english = document.getElementById("english");
let italy = document.getElementById("italy");
let spain = document.getElementById("spain");
let langmenu = document.querySelector(".menulanguage");
let options = document.querySelectorAll(".menulanguage li")
let langscreen = document.querySelector(".language h3")
let language = document.querySelector(".language");
let list = document.querySelectorAll("li")
let cardnumber = document.querySelector("#card");
let expiredate = document.querySelector("#datecard")
let crypt = document.querySelector("#crypt");
let submit = document.querySelector("#valider");



english.addEventListener("click", function(){
    titlemoney.innerHTML = "Amount: " + moneylot.toFixed(2) + "$";
    langscreen.innerText = "EN";
    cardnumber.innerText = "Card Number";
    expiredate.innerText = "Expire Date";
    getback.innerText = "Cancel and Return";
    submit.innerText = "Submit";


})
french.addEventListener("click", function(){
    titlemoney.innerText = "Montant: " + moneylot.toFixed(2) + "€";
    langscreen.innerText = "FR";
    cardnumber.innerText = "Numéro de carte";
    getback.innerText = "Annuler et retourner dans la page d'acceuil"
    submit.innerText = "Valider"
})
spain.addEventListener("click", function(){
    titlemoney.innerText = "Importe: " + moneylot.toFixed(2) + "€";
    langscreen.innerText = "ES";
    cardnumber.innerText = "Numero di tarjeta";
    expiredate.innerText = "Vâlida Hasta"
    submit.innerText = "Validar"
    getback.innerText = "Cancelar y volver a la página de inicio";
})
italy.addEventListener("click", function(){
    titlemoney.innerText = "Quantità: " + moneylot.toFixed(2) + "€";
    langscreen.innerText = "ITA";
    cardnumber.innerText = "Numero di carta";
    expiredate.innerText = "Date di scadenza"
    submit.innerText = "Convalidare"
    getback.innerText = "Annulla e torna alla home page";

})
for(let l of list){
    language.addEventListener("click", function(){
    l.classList.toggle("display");
})
}



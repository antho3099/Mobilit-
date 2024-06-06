let check = document.querySelector("#checkbox");
let header4 = document.querySelector(".headercard");
let payment = document.querySelector(".creditcard");
let payform = document.querySelector(".creditcard form");


//On vérifie que la case est coché 
function verification(){

    //Si la case est coché 
    if(check.checked){
        //Le fond change et on déclenche l'évènement d'un bouton.
        paid.style.backgroundColor = "orangered";
        paid.addEventListener('click', function(){
            header3.style.display = "none";
            header4.style.display = "block";
            payment.style.display = "block";
            check.style.display = "none"; 
            paid.style.display = "none";
            bills.style.display = "none"
        })
    }
    //Si la case n'est pas coché
    else{
        paid.style.backgroundColor = "rgb(255, 163, 129)";
    }
    
}
check.addEventListener('click', verification);





let getReturn = document.querySelector("#close");
let travel = document.querySelector("#travel");
let numbercard = document.querySelector("#numbercard");
let cardfile = document.querySelector(".card");


if(localStorage.getItem("ticket")== "yes"){
    cardfile.style.display = "block";
    notice.style.display = "none";
    shop.style.display = "none";

    let time = document.querySelector("#timer");
    let timer = 3600;
    time.innerText = timer;
    

    function diminueTime(){
        let minutes = parseInt(timer / 60, 10);
        let secondes = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        secondes = secondes < 10 ? "0" + secondes : secondes;
        time.innerText = minutes + ":" + secondes
        timer = timer <= 0 ? 0 : timer -0;
        timer--
        localStorage.setItem("time", minutes);
        localStorage.setItem("secondes", secondes);
        
        if(timer < 0){
            footer.style.display = "block";
            notice.style.display = "block";
            header1.style.display = "block";
            shop.style.display = "block";
            cardfile.style.display = "none";
            localStorage.setItem("ticket", "none");
        }
    }
    setInterval(diminueTime, 1000);
}
else if(localStorage.getItem("ticket")== "none"){
    cardfile.style.display = "none";
    notice.style.display = "block";
    shop.style.display = "block";
}

getReturn.addEventListener('click', function(){
    header1.style.display = "block";
    accepted.style.display = "none";
    off.style.display = "none";
    header3.style.display = "none";
    cardfile.style.display = "block";
    footer.style.display = "block";
    localStorage.setItem("ticket", "yes");
})
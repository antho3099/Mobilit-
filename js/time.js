getReturn.addEventListener('click', function(){
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
        

        if(timer < 0){
            footer.style.display = "block";
            notice.style.display = "block";
            header1.style.display = "block";
            shop.style.display = "block";
            cardfile.style.display = "none";
            localStorage.setItem("ticket", "none");
        }
}
setInterval(diminueTime, 1000);;
});
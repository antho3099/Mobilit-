let internet = document.querySelector(".internet")
let img = document.querySelector("img");
if(navigator == 'undefined'){
    internet.style.display = "block";
    img.style.display = "none";
}
else{
    img.style.display = "block";
};

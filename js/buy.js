let score = document.querySelectorAll(".count span");
let full = document.querySelectorAll(".more");
let less = document.querySelectorAll(".low"); 
let incrementation = 0;
console.log(score);

full.addEventListener('click', function(){
    score.innerText= ++incrementation;
});



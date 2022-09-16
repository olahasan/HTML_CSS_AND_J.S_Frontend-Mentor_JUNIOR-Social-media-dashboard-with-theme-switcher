let body = document.querySelector("body");
let button = document.getElementById("button-mood");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let darkk = document.querySelectorAll(".darkk");
let black = document.querySelectorAll(".black");
let box = document.querySelectorAll(".box");
let boxx = document.querySelectorAll(".boxx");
let numwhi = document.querySelectorAll(".numwhi");
let mood = document.getElementById("mood");
// console.log(button);
// console.log(body);
// console.log(h2);
// console.log(h3);
// console.log(darkk);
// console.log(black);
// console.log(box);
// console.log(boxx);
// console.log(numwhi);
// console.log(mood);


button.onclick = function(){
    this.classList.toggle("active");
    body.classList.toggle("light");
    h2.classList.toggle("white");
    h3.classList.toggle("white");
    darkk.forEach(function(e){
        e.classList.toggle("white");
    })
    black.forEach(function(e){
        e.classList.toggle("white");
    })
    box.forEach(function(e){
        e.classList.toggle("white");
    })
    boxx.forEach(function(e){
        e.classList.toggle("white");
    })
    numwhi.forEach(function(e){
        e.classList.toggle("white");
    })

    if(button.classList.contains("active")){
        mood.innerHTML = "Light Mode";
        mood.style.transition = "all .3s ease-in-out";

        // console.log("true");
    }else{
        mood.innerHTML = "Dark Mode";
        mood.style.transition = "all .3s ease-in-out";
        // console.log("false");
    }
    
}



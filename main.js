let progres = document.getElementById("progress");
let btPrev = document.getElementById("prev");
let btNext = document.getElementById("next");
let cir = document.querySelectorAll(".circle");
let active = 1;

btNext.addEventListener("click", () => {
    active++;
    if (active > cir.length ){
        active = cir.length;
    }

    upProgress();
})

btPrev.addEventListener("click", () => {
    active--;
    if(active < 1){
       active = 1;
} 
    upProgress();
});


function upProgress () {
    cir.forEach((circle, i)=> {
        if(i < active) {
            circle.classList.add("active")
        }else {
            circle.classList.remove("active")
        }
    })
     
    let act = document.querySelectorAll(".active")

    progres.style.width = (act.length - 1 ) / (cir.length - 1 ) * 100 + "%"
    
    if(active === 1){
    btPrev.disabled = true
} else if (active === cir.length){
    btNext.disabled = true 
} else {
    btNext.disabled = false
    btPrev.disabled = false
}
        
    
}

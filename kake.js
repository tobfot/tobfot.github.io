const lyd = new Audio("pop.mp3");

let tidIgjen = 5;
let tidsTimer = setInterval(tidtaking, 1000);
function tidtaking() {
    if(tidIgjen <= 0) {
        clearInterval(tidsTimer);
        document.getElementById("infoskjerm").innerText = "Ferdig! Du fikk " + poengsum + " poeng.";
        document.getElementById("kake").removeEventListener("click", klikk);
    }
    else {
        document.getElementById("infoskjerm").innerText = tidIgjen + " sekunder igjen.";
    }

    tidIgjen = tidIgjen - 1;
}

// function stopp() {
//     //alert(stopp) 
//     alert("STOPP!")
//     poengsum = 0;
//     document.getElementById("kake").removeEventListener("click", klikk);
// }


// henter ut kake-bildet og legger til en lyttefunksion som kjører når du klikker

document.getElementById("kake").addEventListener("click",klikk)

let poengsum = 0; 

let stor = true;

function klikk() {
    lyd.play();
    poengsum = poengsum + 1;

    document.getElementById("poeng").innerText = poengsum;

    if (stor) {
        document.getElementById("kake").style.transform = "scale(0.8)";
        stor=false;
    } else {
        document.getElementById("kake").style.transform = "scale(1)";
        stor=true;
    }

    if (poengsum > 9) {
        document.getElementById("kake").src = "R1.png";
        // document.getElementById("kake").width = "400";
    }
    
    if(poengsum > 19){
        document.getElementById("kake").src = "R2.png";
    }

    if(poengsum > 29){
        document.getElementById("kake").src = "R3.png";
    }

    if(poengsum > 39){
        document.getElementById("kake").src = "R4.png";
    }

    if(poengsum > 49){
        document.getElementById("kake").src = "R5.png";
    }

    if(poengsum > 59){
        document.getElementById("kake").src = "R6.png";
    }

}


document.getElementById("knap").addEventListener("click",restart)

function restart(){
    // const timeout = setTimeout(stopp, 2000);
    poengsum = 0;
    document.getElementById("poeng").innerText = poengsum;
    document.getElementById("kake").src = "R0.png";
    document.getElementById("kake").addEventListener("click", klikk);

    tidIgjen = 5;
    tidsTimer = setInterval(tidtaking, 1000);
}
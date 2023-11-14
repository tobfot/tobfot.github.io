//dette er et bildegaleri

let bilde = document.getElementById("bilde");

bilde.src = "bilder/oip.jpg";

let bildeliste=[
    "oip.jpg",
    "oip(1).jpg",
    "oip(2).jpg",
    "oip(3).jpg",
    "oip(4).jpg",
    "OIP (5).jpg",
];

bilde.src = "bilder/" + bildeliste[0];


let aktivbilde = 0
bilde.src = "bilder/" + bildeliste[aktivbilde];

let knapptilbake = document.getElementById("knapptilbake");
let knappfrem = document.getElementById("knappfrem");


knappfrem.addEventListener("click", fremm);

function fremm () {
    aktivbilde = aktivbilde + 1;

    if (aktivbilde > 4) {
        aktivbilde = 0;
    }
   
    bilde.src = "bilder/" + bildeliste[aktivbilde];
}

knapptilbake.addEventListener("click", tilbake);

function tilbake () {
    aktivbilde = aktivbilde - 1;

    if (aktivbilde < 0) {
        aktivbilde = 4;
    }

    bilde.src = "bilder/" + bildeliste[aktivbilde];
}


document.addEventListener("keydown", tastatur);

function tastatur(evt){
    console.log("du trykker på " + evt.keyCode);
    if (evt.keyCode == 37) {
        tilbake();
    }
}





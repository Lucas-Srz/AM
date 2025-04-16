console.log("Entrée dans le fichier main.js");

let compt_coca, compt_eau, compt_perrier, compt_orange, compt_abricot, compt_fraise, compt_sprite, compt_orangina, compt_lipton, compt_cocazero, compt_tomate, compt_pomme, compt_annanas;

function coca() {
    compt_coca++;
    var text = document.getElementById("coca");
    
    text.innerText = compt_coca;
}

function reset() {
    compt_coca = 0;
    compt_eau = 0;
    compt_perrier = 0;
    compt_orange = 0;
    compt_abricot = 0;
    compt_fraise = 0;
    compt_sprite = 0;
    compt_orangina = 0;
    compt_lipton = 0;
    compt_cocazero = 0;
    compt_tomate = 0;
    compt_pomme = 0;
    compt_annanas = 0;

    var body = document.getElementsByTagName("body")[0];
    body.setAttribute("class", "coca");
}

reset();
console.log("Entrée dans le fichier main.js");

let compt_coca, compt_eau, compt_perrier, compt_orange, compt_abricot, compt_fraise, compt_sprite, compt_orangina, compt_lipton, compt_cocazero, compt_tomate, compt_pomme, compt_annanas;
let DOMCoca = document.getElementById("coca");
let DOMEau = document.getElementById("eau");
let DOMPerrier = document.getElementById("perrier");
let DOMSprite = document.getElementById("sprite");
let DOMOrangina = document.getElementById("orangina");
let DOMLipton = document.getElementById("lipton");
let DOMCocazero = document.getElementById("cocazero");
let DOMOrange = document.getElementById("orange");
let DOMAbricot = document.getElementById("abricot");
let DOMFraise = document.getElementById("fraise");
let DOMTomate = document.getElementById("tomate");
let DOMPomme = document.getElementById("pomme");
let DOMAnnanas = document.getElementById("annanas");


function init() {
    compt_coca = 0;
    compt_eau = 0;
    compt_perrier = 0;
    compt_sprite = 0;
    compt_orangina = 0;
    compt_lipton = 0;
    compt_cocazero = 0;
    compt_orange = 0;
    compt_abricot = 0;
    compt_fraise = 0;
    compt_tomate = 0;
    compt_pomme = 0;
    compt_annanas = 0;
    compt_annanas = 0;
}

function compteur(boisson) {
    console.log("Boisson choisie : " + boisson);
    
    switch (boisson) {
        case coca:
            compt_coca++;
            if(compt_coca <= 9){
                DOMCoca.innerText = "0" + compt_coca;
            } else {
                DOMCoca.innerText = compt_coca;
            }
            break;
        
        case eau:
            compt_eau++;
            if(compt_eau <= 9){
                DOMEau.innerText = "0" + compt_eau;
            } else {
                DOMEau.innerText = compt_eau;
            }
            break;

        case perrier:
            compt_perrier++;
            if(compt_perrier <= 9){
                DOMPerrier.innerText = "0" + compt_perrier;
            } else {
                DOMPerrier.innerText = compt_perrier;
            }
            break;
        
        case sprite:
            compt_sprite++;
            if(compt_sprite <= 9){
                DOMSprite.innerText = "0" + compt_sprite;
            } else {
                DOMSprite.innerText = compt_sprite;
            }
            break;
        
        case orangina:
            compt_orangina++;
            if(compt_orangina <= 9){
                DOMOrangina.innerText = "0" + compt_orangina;
            } else {
                DOMOrangina.innerText = compt_orangina;
            }
            break;

        case lipton:
            compt_lipton++;
            if(compt_lipton <= 9){
                DOMLipton.innerText = "0" + compt_lipton;
            } else {
                DOMLipton.innerText = compt_lipton;
            }
            break;

        case cocazero:
            compt_cocazero++;
            if(compt_cocazero <= 9){
                DOMCocazero.innerText = "0" + compt_cocazero;
            } else {
                DOMCocazero.innerText = compt_cocazero;
            }
            break;

        case orange:
            compt_orange++;
            if(compt_orange <= 9){
                DOMOrange.innerText = "0" + compt_orange;
            } else {
                DOMOrange.innerText = compt_orange;
            }
            break;

        case abricot:
            compt_abricot++;
            if(compt_abricot <= 9){
                DOMAbricot.innerText = "0" + compt_abricot;
            } else {
                DOMAbricot.innerText = compt_abricot;
            }
            break;

        case fraise:
            compt_fraise++;
            if(compt_fraise <= 9){
                DOMFraise.innerText = "0" + compt_fraise;
            } else {
                DOMFraise.innerText = compt_fraise;
            }
            break;

        case tomate:
            compt_tomate++;
            if(compt_tomate <= 9){
                DOMTomate.innerText = "0" + compt_tomate;
            } else {
                DOMTomate.innerText = compt_tomate;
            }
            break;

        case pomme:
            compt_pomme++;
            if(compt_pomme <= 9){
                DOMPomme.innerText = "0" + compt_pomme;
            } else {
                DOMPomme.innerText = compt_pomme;
            }
            break;

        case annanas:
            compt_annanas++;
            if(compt_annanas <= 9){
                DOMAnnanas.innerText = "0" + compt_annanas;
            } else {
                DOMAnnanas.innerText = compt_annanas;
            }
            break;

        default:
            break;
    }
}

function reset() {
    console.log("Function reset");
    init()

    DOMCoca.innerText = "0" + compt_coca;
    DOMEau.innerText = "0" + compt_eau;
    DOMPerrier.innerText = "0" + compt_perrier;
    DOMOrange.innerText = "0" + compt_orange;
    DOMAbricot.innerText = "0" + compt_abricot;
    DOMFraise.innerText = "0" + compt_fraise;
    DOMSprite.innerText = "0" + compt_sprite;
    DOMOrangina.innerText = "0" + compt_orangina;
    DOMLipton.innerText = "0" + compt_lipton;
    DOMCocazero.innerText = "0" + compt_cocazero;
    DOMTomate.innerText = "0" + compt_tomate;
    DOMPomme.innerText = "0" + compt_pomme;
    DOMAnnanas.innerText = "0" + compt_annanas;

    let img = document.getElementById("trash");
    img.setAttribute("src","../media/img/trash_on.png");
    setTimeout(function() {
        img.setAttribute("src","../media/img/trash.png");
    }, 5000);
}

init()
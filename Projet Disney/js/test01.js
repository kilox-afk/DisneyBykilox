'use strict'

//---------------------------------------------------Bloc 2 ----------------------------------------------------------------
// Cette évènement va voir ce que fait le défilement de page
window.addEventListener("scroll", function () {
    // Sélection de l'élément avec la classe "topbar"
    var topbar = document.querySelector(".topbar");

    // Ajout/Suppression de la classe "invisible" en fonction de la position de défilement de la fenêtre 
    // (si < 569 il est invisible )
    topbar.classList.toggle("invisible", window.scrollY <= 569);
});

//---------------------------------------------------Bloc 4 ----------------------------------------------------------------

// Création d'une fonction afficherDiv
function afficherDiv(divId) {
    // Sélection de l'élément divId à partir de son Id
    var div = document.getElementById(divId);

    // Sélection de l'élément spanplus à partir de son Id
    var spanplus = div.querySelector('span');

    // Condition "si la div-affichee est présente"
    if (div.classList.contains('div-affichee')) {
        // Si la classe 'div-affichee' est présente, on la supprime et on ajoute la classe 'div-cachee'
        div.classList.remove('div-affichee');
        div.classList.add('div-cachee');

        // Modification du contenu HTML de l'élément spanplus pour afficher le signe '+' en cas de condition si dessus
        spanplus.innerHTML = '+';
        // Condition "Tout les autres cas sauf la condition énoncée précédemment"
    } else {
        // Si la classe 'div-affichee' n'est pas présente, on la supprime et on ajoute la classe 'div-cachee'
        div.classList.remove('div-cachee');
        div.classList.add('div-affichee');

        // Modification du contenu HTML de l'élément spanplus pour afficher le signe '-' en cas de condition si dessus
        spanplus.innerHTML = '-';
    }
}

function afficherDiv(divId, spanId) {
    var div = document.getElementById(divId);
    var spanplus = document.getElementById(spanId);

    if (div.classList.contains('div-affichee')) {
        div.classList.remove('div-affichee');
        div.classList.add('div-cachee');
        spanplus.innerHTML = '+';
    } else {
        div.classList.remove('div-cachee');
        div.classList.add('div-affichee');
        spanplus.innerHTML = '-';
    }
}

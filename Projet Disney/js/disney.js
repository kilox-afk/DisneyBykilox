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

function afficherDiv(divId, spanId) {
    // Récupérer l'élément div à afficher/cacher en utilisant son ID
    var div = document.getElementById(divId);
    // Récupérer l'élément span (généralement utilisé pour afficher le symbole + ou -)
    var spanplus = document.getElementById(spanId);

    // Vérifier si la classe 'div-affichee' est présente sur l'élément div
    if (div.classList.contains('div-affichee')) {
        // Si la classe 'div-affichee' est présente, cela signifie que le div est actuellement affiché
        // Nous allons donc le cacher en retirant la classe 'div-affichee' et en ajoutant la classe 'div-cachee'
        div.classList.remove('div-affichee');
        div.classList.add('div-cachee');
        // Modifier le contenu du span pour afficher le symbole '+'
        spanplus.innerHTML = '+';
    } else {
        // Si la classe 'div-affichee' n'est pas présente, cela signifie que le div est actuellement caché
        // Nous allons donc l'afficher en retirant la classe 'div-cachee' et en ajoutant la classe 'div-affichee'
        div.classList.remove('div-cachee');
        div.classList.add('div-affichee');
        // Modifier le contenu du span pour afficher le symbole '-'
        spanplus.innerHTML = '-';
    }
}



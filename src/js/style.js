/*
    Menu Hamburger
*/

// On récupère toutes les puces
const puces = document.querySelectorAll(".hamparent > div:first-child > img");

// On parcourt toutes les puces, et on ajoute un écouteur d'événement sur chacune d'entre elles
puces.forEach(puce => {
    // On ajoute un écouteur d'événement sur le click de la puce
    puce.addEventListener('click', function() {
        // On récupère le menu hamburger, qui est le frère suivant de la puce
        const hamenu = this.parentElement.nextElementSibling;

        // On affiche ou on cache le menu hamburger en fonction de son état actuel
        if(hamenu.style.display === 'flex') {
            hamenu.style.display = 'none';
            this.style.animation = 'puce 0.3s linear alternate-reverse forwards';
        } else {
            hamenu.style.display = 'flex';
            this.style.animation = 'puce 0.3s linear alternate forwards';
        }
    });

    // On ajoute un écouteur d'événement sur la fin de l'animation de la puce
    puce.addEventListener('animationend', function(event) {
        // Si l'animation est terminée, et que c'est l'animation 'puce' qui est terminée, on fait pivoter la puce
        if(event.animationName === 'puce') {
            if(event.target.parentElement.nextElementSibling.style.display === 'flex') {
                event.target.style.transform = 'rotate(180deg)';
                event.target.style.animation = '';
            } else {
                event.target.style.transform = 'rotate(90deg)';
                event.target.style.animation = '';
            }
        }
    });
});
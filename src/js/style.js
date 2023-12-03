/*
    Menu Hamburger
*/

const puces = document.querySelectorAll(".hamparent > div:first-child > img");

puces.forEach(puce => {
    puce.addEventListener('click', function() {
        const hamenu = this.parentElement.nextElementSibling;

        if(hamenu.style.display === 'flex') {
            hamenu.style.display = 'none';
            this.style.animation = 'puce 0.3s linear alternate-reverse forwards';
        } else {
            hamenu.style.display = 'flex';
            this.style.animation = 'puce 0.3s linear alternate forwards';
        }
    });

    puce.addEventListener('animationend', function(event) {
        if(event.animationName === 'puce') {
            if(event.target.parentElement.nextElementSibling.style.display === 'flex') {
                event.target.style.rotate = '180deg';
                event.target.style.animation = '';
            } else {
                event.target.style.rotate = '90deg';
                event.target.style.animation = '';
            }
        }
    });
});
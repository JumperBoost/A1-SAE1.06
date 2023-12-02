/*
    Menu Hamburger
*/

const puce = document.querySelector(".puce");

puce.addEventListener('click', function() {
    const hamenu = this.parentElement.nextElementSibling;
    if(hamenu.style.display === 'flex') {
        hamenu.style.display = 'none';
    } else {
        hamenu.style.display = 'flex';
        this.querySelector('')
    }
});
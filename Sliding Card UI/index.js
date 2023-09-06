let card = document.querySelector('.card')
let cardToggle = document.querySelector('.toggle')

cardToggle.onclick = function() {
    card.classList.toggle('active')
}
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const imgId = card.getAttribute('id')
        const title = card.querySelector('h4').innerHTML
        const auhtor = card.querySelector('p').innerHTML

        modalOverlay.classList.add('active')

        modalOverlay.querySelector('img').src =`./layouts/assets/${imgId}.png`
        modalOverlay.querySelector('h4').innerText = `${title}`
        modalOverlay.querySelector('p').innerHTML = `${auhtor}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})
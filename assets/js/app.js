const card = document.querySelectorAll('.cards');

card.forEach(cards => {
    cards.addEventListener('click', () =>{
        removeActiveClasses()
        cards.classList.add('active')
    })
})

function removeActiveClasses() {
    card.forEach(cards => {
        cards.classList.remove('active');
    })
};


// console.log(removeActiveClasses());


/*const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
*/
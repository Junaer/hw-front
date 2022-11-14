let dead = document.getElementById('dead')
let lost = document.getElementById('lost')


let holes = document.querySelectorAll('.hole')
holes.forEach(el => {
    el.addEventListener('click', () => {
        if (+lost.textContent === 5) {
            alert('You lose')
            lost.textContent = -1
            dead.textContent = 0
        }

        if (+dead.textContent === 10) {
            alert('You win')
            lost.textContent = 0
            dead.textContent = -1
        }
        
        if (el.classList.contains( 'hole_has-mole' ) === true) {
            dead.textContent++
        }
        else{
            lost.textContent++
        }
    })
})
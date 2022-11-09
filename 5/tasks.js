let dead = document.getElementById('dead')
let lost = document.getElementById('lost')


let holes = document.querySelectorAll('.hole')
holes.forEach(el => {
    el.addEventListener('click', () => {
        if (+lost.textContent === 5) {
            alert('You lose')
            location.reload()
        }

        if (+dead.textContent === 10) {
            alert('You win')
            location.reload()
        }
        
        if (el.classList.contains( 'hole_has-mole' ) === true) {
            dead.textContent++
        }
        else{
            lost.textContent++
        }
    })
})
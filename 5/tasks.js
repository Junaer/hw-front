let dead = document.getElementById('dead')
let lost = document.getElementById('lost')
hole1 = document.getElementById('hole1')
hole2 = document.getElementById('hole2')
hole3 = document.getElementById('hole3')
hole4 = document.getElementById('hole4')
hole5 = document.getElementById('hole5')
hole6 = document.getElementById('hole6')
hole7 = document.getElementById('hole7')
hole8 = document.getElementById('hole8')
hole9 = document.getElementById('hole9')


hole1.onclick = () => {
    if (hole1.classList.contains( 'hole_has-mole' ) === true) dead.textContent++
    else lost.textContent++
}
hole2.onclick = () => {
    if (hole2.classList.contains( 'hole_has-mole' ) === true) {
        dead.textContent++
    }else{
        lost.textContent++
    }
}
hole3.onclick = () => {
    if (hole3.classList.contains( 'hole_has-mole' ) === true) {
        dead.textContent++
    }else{
        lost.textContent++
    }
}
hole4.onclick = () => {
    if (hole4.classList.contains( 'hole_has-mole' ) === true) {
        dead.textContent++
    }else{
        lost.textContent++
    }
}
hole5.onclick = () => {
    if (hole5.classList.contains( 'hole_has-mole' ) === true) {
        dead.textContent++
    }else{
        lost.textContent++
    }
}
hole6.onclick = () => {
    if (hole6.classList.contains( 'hole_has-mole' ) === true) {
        dead.textContent++
    }else{
        lost.textContent++
    }
}
hole7.onclick = () => {
    if (hole7.classList.contains( 'hole_has-mole' ) === true) {
        dead.textContent++
    }else{
        lost.textContent++
    }
}
hole8.onclick = () => {
    if (hole8.classList.contains( 'hole_has-mole' ) === true) {
        dead.textContent++
    }else{
        lost.textContent++
    }
}
hole9.onclick = () => {
    if (hole9.classList.contains( 'hole_has-mole' ) === true) {
        dead.textContent++
    }else{
        lost.textContent++
    }
}
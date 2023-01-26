reveal = document.querySelectorAll('.reveal')

function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect()

    if (bottom < 0) {
        return false
    }
    if (top > window.innerHeight) {
        return false
    }
    return true
}

setInterval(() => {
    reveal.forEach(element => {
        let bool = isVisible(element)
        if (bool === true) {
            element.classList.add('reveal_active')
        }else{
            element.classList.remove('reveal_active')
        }
    });
}, 1000)
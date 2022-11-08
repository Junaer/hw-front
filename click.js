const img = document.getElementById('img')
const main = document.getElementById('main')
let b = true
count = 0
img.onclick = () => {
    if (b === true) {
        main.textContent++
        img.width += 200
        img.height += 200
        b = false
    }else{
        main.textContent++
        img.width -= 200
        img.height -= 200
        b = true
    }

}
let button = document.querySelector('.dropdown__value')
let list = document.querySelector('.dropdown__list')
button.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(button)
    list.classList.toggle('dropdown__list_active')
})

let items = document.querySelectorAll('.dropdown__item')
items.forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        button.textContent = el.textContent
        list.classList.toggle('dropdown__list_active')
    })
})


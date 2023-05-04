let keybords = document.querySelectorAll('.menu__link')
keybords.forEach(el => {
    el.addEventListener('click', (event) => {
        console.log(event)
        const parentel = el.closest('.menu__item')
        const menuEl = parentel.querySelector('.menu_sub')
        console.log(menuEl);
        if (menuEl !== null) {
            if (menuEl.className == 'menu menu_sub' || menuEl.className == 'menu menu_sub menu_active') {
                event.preventDefault();
                menuEl.classList.toggle('menu_active')
                console.log('-----------')
                console.log(this)
                console.log('-----------')
            }
        }
    })
})

function init() {
    alert('Документ загружен');
}
window.addEventListener('load', init)

// Дабл клик тест

// button = document.querySelector('.button')
// button.addEventListener('dblclick', (event) => {
//     console.log(event)
// })





// const menuEl=document.querySelectorAll('.menu__item')
// console.log(menuEl[1].textContent);
// console.log(menuEl[1].firstElementChild.href);
// event.preventDefault();
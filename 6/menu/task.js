let keybords = document.querySelectorAll('.menu__link')
keybords.forEach(el => {
    el.addEventListener('click', function (event) {
            const parentel = el.closest('.menu__item')
            const menuEl=parentel.querySelector('.menu_sub')
            console.log(menuEl);
            if (menuEl.className == 'menu menu_sub' || menuEl.className == 'menu menu_sub menu_active') {
                event.preventDefault();
                if (menuEl.className == "menu menu_sub menu_active") {
                    menuEl.classList.remove('menu_active')
                }else{
                    menuEl.classList.add('menu_active')
                }
                
                
            }
        })
    })


// const menuEl=document.querySelectorAll('.menu__item')
// console.log(menuEl[1].textContent);
// console.log(menuEl[1].firstElementChild.href);
// event.preventDefault();
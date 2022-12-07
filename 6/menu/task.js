let keybords = document.querySelectorAll('.menu__link')
keybords.forEach(el => {
    el.addEventListener('click', function (event) {
            const parentel = el.closest('.menu__item')
            const menu_el=parentel.querySelector('.menu_sub')

            if (menu_el) {
                const menu_act=document.querySelector('.menu_active')
                if (menu_act) {
                    menu_act.classList.remove('menu_active')
                }
                console.log(menu_act)
                menu_el.classList.add('menu_active')
                event.preventDefault();
            }
        })
    })
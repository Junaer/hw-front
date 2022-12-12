let keybords = document.querySelectorAll('.menu__link')
keybords.forEach(el => {
    el.addEventListener('click', function (event) {
            const parentel = el.closest('.menu__item')
            const menu_el=parentel.querySelector('.menu_sub')
            console.log(menu_el);
            if (menu_el.className == 'menu menu_sub') {
                const menu_act=document.querySelector('.menu_active')
                if (menu_act) {
                    menu_act.classList.remove('menu_active')
                }
                menu_el.classList.add('menu_active')
                event.preventDefault();
            }else{
                const menu_act=document.querySelector('.menu_active')
                menu_act.classList.remove('menu_active')
            }
        })
    })
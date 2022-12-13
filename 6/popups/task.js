const closs = document.getElementById('closs');
const closeSu = document.getElementById('')
const close_success = document.getElementById("closs_success");
const nice = document.getElementById('nice');
let name = 'Evgen'


closs.addEventListener('click', () => document.getElementById("modal_main").classList.remove('modal_active'))


close_success.addEventListener('click', () => document.getElementById("modal_success").classList.remove('modal_active'))


nice.addEventListener('click', () => {
    document.getElementById("modal_main").classList.remove('modal_active')
    document.getElementById("modal_success").classList.add('modal_active')
})

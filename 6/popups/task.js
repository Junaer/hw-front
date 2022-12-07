const closekk = document.getElementById('closs');
const close_success = document.getElementById("closs_success");
const nice = document.getElementById('nice');

closekk.onclick = () => {
    document.getElementById("modal_main").classList.remove('modal_active')
}
close_success.onclick = () => {
    document.getElementById("modal_success").classList.remove('modal_active')
}
nice.onclick = () => {
    document.getElementById("modal_main").classList.remove('modal_active')
    document.getElementById("modal_success").classList.add('modal_active')
}

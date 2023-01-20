let tabs = document.querySelectorAll('.tab')
let contents = document.querySelectorAll('.tab__content')
console.log(contents)
let startIndex = 0
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        document.querySelector('.tab_active').classList.toggle('tab_active')
        tab.classList.toggle('tab_active')
        contents[index].classList.toggle('tab__content_active')
        contents[startIndex].classList.toggle('tab__content_active')
        startIndex = index
    })
});

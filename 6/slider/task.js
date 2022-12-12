const back = document.getElementsByClassName('slider__arrow slider__arrow_prev')[0]
const next = document.getElementsByClassName('slider__arrow slider__arrow_next')[0]
const photo = document.querySelectorAll('.slider__items img')
const mainPhoto = document.getElementsByClassName('slider__item_active')



back.addEventListener('click', function () {
    const slider = document.querySelectorAll('.slider__item')
    let arr = Array.from(slider);
    let id = arr.findIndex(el => el.className=='slider__item slider__item_active');
    if (id == 0) {
        id = photo.length
    }
    document.getElementsByClassName('slider__item_active')[0].classList.remove('slider__item_active')
    id--
    photo[id].closest('.slider__item').classList.add('slider__item_active')
  })
next.addEventListener('click', function () {
    const slider = document.querySelectorAll('.slider__item')
    let arr = Array.from(slider);
    let id = arr.findIndex(el => el.className=='slider__item slider__item_active');
    id++
    if (id == photo.length) {
        id = 0
    } 
    document.getElementsByClassName('slider__item_active')[0].classList.remove('slider__item_active')
    photo[id].closest('.slider__item').classList.add('slider__item_active')
})
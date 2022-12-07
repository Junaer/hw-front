const back = document.getElementsByClassName('slider__arrow slider__arrow_prev')[0]
const next = document.getElementsByClassName('slider__arrow slider__arrow_next')[0]
const photo = document.querySelectorAll('.slider__items img')
const main_photo = document.getElementsByClassName('slider__item_active')
let count = 0

back.addEventListener('click', function () {
    if (count == 0) {
        count = photo.length
    }
    document.getElementsByClassName('slider__item_active')[0].classList.remove('slider__item_active')
    count--
    photo[count].closest('.slider__item').classList.add('slider__item_active')
  })
next.addEventListener('click', function () {
    count++
    
    if (count == photo.length) {
        count = 0
    } 
 
    document.getElementsByClassName('slider__item_active')[0].classList.remove('slider__item_active')
    
    photo[count].closest('.slider__item').classList.add('slider__item_active')
})
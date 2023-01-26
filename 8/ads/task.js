let rotators = document.querySelectorAll('.rotator__case')
let iter = 0
let lastIter = -1

setInterval(() => {
    if (iter < rotators.length){
        if (lastIter < 0) {
            rotators[rotators.length-1].classList.remove('rotator__case_active')
            rotators[iter].classList.add('rotator__case_active')
            iter++
            lastIter++
        }else{
            rotators[lastIter].classList.remove('rotator__case_active')
            rotators[iter].classList.add('rotator__case_active')
            iter++
            lastIter++
        }
    }else{
        iter = 0
        lastIter = -1
    }
}, 1000)
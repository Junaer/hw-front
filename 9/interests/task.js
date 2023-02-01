block = document.querySelectorAll('.interest__check')

block.forEach(v => {
    v.addEventListener('click', event => {
        if (v.classList[1] === 'main1') {
            document.querySelectorAll('.first').forEach(value => {
                console.log(value.checked)
                if (v.checked) {
                value.checked = true
                }else{
                    value.checked = false
                }
            })
        }
        if (v.classList[1] === 'main2') {
            document.querySelectorAll('.second').forEach(value => {
                console.log(value.checked)
                if (v.checked) {
                value.checked = true
                }else{
                    value.checked = false
                }
            })
        }
    })
})

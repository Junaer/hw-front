sizeButtons = document.querySelectorAll('.font-size')
book = document.querySelector('#book')

sizeButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(book.classList)
        console.log(event)
        sizeButtons.forEach(el => {
            el.classList.remove('font-size_active')
        })
        element.classList.add('font-size_active')
        if (event.target.classList[1] === 'font-size_small') {
            if (book.classList[1]) {
                book.classList.remove(book.classList[1])
                book.classList.add('book_fs-small')
            }else{
                book.classList.add('book_fs-small')
            }
        }else if (event.target.classList[1] === 'font-size_big') {
            if (book.classList[1]) {
                book.classList.remove(book.classList[1])
                book.classList.add('book_fs-big')
            }else{
                book.classList.add('book_fs-big')
            }                
        }else if (event.target.classList[1] === 'font-size_active') {
            book.classList.remove(book.classList[1])
        }
    })
});
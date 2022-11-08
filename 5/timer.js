const p = document.getElementById('main')

let count = 0
const countet = Number(p.textContent)

let timer = setInterval(() => {
  count++
  p.textContent = Number(p.textContent) - 1
  if (count == countet) {
    clearInterval(timer)
    alert('Вы победили в конкурсе!')
  }
}, 1000)


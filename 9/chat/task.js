const chatButton = document.querySelector('.chat-widget')
const messages = document.querySelector( '.chat-widget__messages' );
let valueList = [ 'Ваше мнение нам не важно', 'Не пиши сюда', 'Подумай о написанном и извинись']
i = 0


chatButton.addEventListener('click', (event) => {
    chatButton.classList.add('chat-widget_active')
})

document.addEventListener('keyup', event => {
    Data = new Date();
    if (event.key === 'Enter' ) {
        let iter = (i + 1) % valueList.length
        messageText = document.querySelector('.chat-widget__input')
        if (messageText.value) {
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${Data.getHours()}:${Data.getMinutes()}</div>
          <div class="message__text">
            ${messageText.value}
          </div>
        </div>
      `
      messages.innerHTML += `
        <div class="message">
          <div class="message__time">${Data.getHours()}:${Data.getMinutes()}</div>
          <div class="message__text">
            ${valueList[iter]}
          </div>
        </div>
      `
      i++
      messageText.value = ''
      messageText.placeholder = "Введите ваше сообщение"
    }else{
      messageText.placeholder = 'Сообщение не может быть пустым'
    }
  }
})
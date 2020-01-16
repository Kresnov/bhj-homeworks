const chatWidget = document.querySelector('.chat-widget');
const widgetInput = document.getElementById('chat-widget__input');
const widgetMessages = document.querySelector('.chat-widget__messages');

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

function randomBotMessages() {
    let botMessages = [
        'Добрый день!',
        'Что вам опять нужно?',
        'А вы уверены?',
        'Подумайте еще раз',
        'У меня перерыв на обед',
        'Напишите через час',
        'Сам такой',
        'Не пишите сюда больше',
        'До свидания!',
    ];  

    let randomMessage = Math.floor(Math.random() * 9);
    return botMessages[randomMessage];
}

function sendMessage() {
    let time = new Date().getHours() + ':' + new Date().getMinutes();

    widgetMessages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">${widgetInput.value}</div>
        </div>
        `;

    widgetInput.value = '';

    widgetMessages.innerHTML += `
        <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">${randomBotMessages()}</div>
        </div>
        `;
}

widgetInput.addEventListener('change', sendMessage);
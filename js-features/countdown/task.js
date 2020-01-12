const startTimer = document.getElementById('timer');

const timer = function() {
    startTimer.textContent -= 1;
    if (startTimer.textContent == 0) {
        alert('Вы победили в конкурсе !');
        clearInterval(interval);
    }
}

let interval = setInterval(timer, 1000);


// const hours = document.getElementById("hours");
// const minutes = document.getElementById("minutes");
// const seconds = document.getElementById("seconds");

// let newLocation = "https://lenta.ru";

// let bigTimer = function() {

// }
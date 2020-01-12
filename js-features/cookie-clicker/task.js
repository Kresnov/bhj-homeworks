const counter = document.getElementById('clicker__counter');
const picture = document.getElementById('cookie');
const speed = document.getElementById('speed');

let start = 0;

picture.onclick = function() {
    let end = Date.now();
    counter.textContent++;
    if (counter.textContent % 2 === 0) {
        picture.width = 200;
    } else {
        picture.width = 300;
    }
    
    let speedCount = (1000 / (end - start));
    speed.textContent = speedCount;
    start = Date.now();
}
let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log(`Повідомлення №${count}`);

    if (count === 5) {
        clearInterval(intervalId);
        console.log("Інтервал зупинено!");
    }
}, 1000);


const box = document.getElementById('box');
let position = 0;
let size = 50;

const animInterval = setInterval(() => {
    position += 5;
    size += 2;

    box.style.left = position + 'px';
    box.style.width = size + 'px';
    box.style.height = size + 'px';

    if (position >= 300) {
        clearInterval(animInterval);
    }
}, 50);


let score = 0;
let timeLeft = 10;

const targetBtn = document.getElementById('target-btn');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer-display');

targetBtn.addEventListener('click', () => {
    if (timeLeft > 0) {
        score++;
        scoreDisplay.textContent = score;
    }
});

const gameTimer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Залишилося часу: ${timeLeft} сек`;

    if (timeLeft <= 0) {
        clearInterval(gameTimer);
        targetBtn.disabled = true;
        alert(`Гра закінчена! Ваш результат: ${score} очок.`);
    }
}, 1000);


const startBtn = document.getElementById('start-btn');
const input = document.getElementById('seconds-input');
const statusMessage = document.getElementById('status-message');

startBtn.addEventListener('click', () => {
    const seconds = parseInt(input.value, 10);

    if (isNaN(seconds) || seconds <= 0) {
        statusMessage.textContent = 'Будь ласка, введіть коректну кількість секунд!';
        return;
    }

    statusMessage.textContent = `Таймер запущено на ${seconds} секунд...`;

    setTimeout(() => {
        statusMessage.textContent = `Час вийшов! Минуло ${seconds} секунд.`;
        alert(`Час вийшов! (${seconds} сек)`);
    }, seconds * 1000);
});
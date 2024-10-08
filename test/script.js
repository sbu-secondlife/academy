window.onload = function () {
    const sevenMinutes = 60 * 7;
    const display = document.querySelector('#time');
    startTimer(sevenMinutes, display);
};

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = Math.floor(timer % 60);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            document.getElementById('quizForm').dispatchEvent(new Event('submit'));
        }
    }, 1000);
}

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Отримання даних користувача
    const name = document.getElementById('name').

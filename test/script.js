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
    event.preventDefault();  // Запобігаємо оновленню сторінки

    // Отримання даних користувача
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;

    // Визначення правильних відповідей
    const correctAnswers = {
        question1: 'a', // Змінити на правильну відповідь
        question2: 'a', // Змінити на правильну відповідь
    };

    // Підрахунок результатів
    let score = 0;
    const formData = new FormData(this);
    for (let question in correctAnswers) {
        if (formData.get(question) === correctAnswers[question]) {
            score++;
        }
    }

    // Показ модального вікна
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.textContent = `Ім'я: ${name} ${surname}\nКількість правильних відповідей: ${score}`;
    overlay.style.display = 'block';
    modal.style.display = 'block';

    // Закриття модального вікна
    document.getElementById('closeModal').addEventListener('click', function() {
        overlay.style.display = 'none';
        modal.style.display = 'none';
    });
});

var button = document.getElementById('startButton');
let startPhrase = [
    "Начинаем!",
    "Поехали!",
    "Стартуем!",
    "Вперед!",
    "Go!!!",
    "Пуск!",
    "Start!",
    "От винта!!",
    "Го!!",
    "Приступаем!",
    "Погнали!",
    "The Time Has Come!",
    "OK, Let's Do This!",
    "Ну что, поехали потихонечку?",
    "Давай швифтанемся!",
    "Вперде!",
]
var randomIndex = Math.floor(Math.random() * startPhrase.length);

// Устанавливаем текст кнопки из массива startPhrase
button.textContent = startPhrase[randomIndex];
let portalGunBtn = document.querySelector('.portalGunBtn');
let portal = document.querySelector('.portal');
let portalBtn = document.querySelector('.button');
let button = document.getElementById('startButton');
let soundEffect = new Audio('./soundEffect.mp3');
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
let randomIndex = Math.floor(Math.random() * startPhrase.length);

// Устанавливаем текст кнопки из массива startPhrase
button.textContent = startPhrase[randomIndex];

//появление портала
function getPortal(){
    portal.style = "opacity: 1; width: 800px; display:block";
    setTimeout(function() {portalBtn.style = "opacity: 1; display:block";}, 1750);
    soundEffect.play();
}

portalGunBtn.addEventListener('click', getPortal, { once: true });

//движение портальной пушки
document.addEventListener('mousemove', function(event) {
    var portalGun = document.querySelector('.portalGun');
  
    var gunRect = portalGun.getBoundingClientRect();
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight - gunRect.height / 2;
  
    var angle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI);
    angle += 45; // Добавляем 45 градусов к углу поворота
    angle = (angle + 45) % 60; // Приводим угол к диапазону от 45 до 60 градусов
  
    var distanceFromBottom = window.innerHeight - event.clientY;
    var distanceFromEdge = event.clientX
  
    if (distanceFromBottom <= 200 || distanceFromBottom > (window.innerHeight-10) ||  distanceFromEdge<15 || distanceFromEdge>window.innerWidth-15) {
        angle = 0; // Возвращаем картинку в изначальное положение
    }
    document.addEventListener('mouseleave', function() {
        angle = 0;
    });

    portalGun.style.transition = 'transform 0.3s ease-out';
  
    portalGun.style.transformOrigin = 'center bottom'; // Устанавливаем точку поворота в центр нижней грани
    portalGun.style.transform = 'rotate(' + angle + 'deg)';
});


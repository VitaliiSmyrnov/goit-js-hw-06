function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// 1.	Розміри найпершого <div> - 30px на 30px.
// 2.	Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3.	Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
const input = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const outputResult = document.querySelector('#boxes');

function createBoxes() {
  let amount = input.value;
  let resultString = '';
  let widthHeight = 30;
  for (let i = 1; i <= amount; i += 1) {
    resultString += `<div style="width: ${widthHeight}px; height: ${widthHeight}px; background-color: ${getRandomHexColor()}"></div>`;
    widthHeight += 10;
  }
  console.log(resultString);
  outputResult.insertAdjacentHTML('beforeend', resultString);
}

function destroyBoxes() {
  outputResult.textContent = '';
}

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

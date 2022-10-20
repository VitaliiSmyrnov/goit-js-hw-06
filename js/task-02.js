const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

//Напиши скрипт, який для кожного елемента масиву ingredients:
// 1.	Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2.	Додасть назву інгредієнта як його текстовий вміст.
// 3.	Додасть елементу клас item.
// 4.	Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsList = document.querySelector('#ingredients');

let listItems = [];
ingredients.forEach((ingredient, index) => {
  let listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;
  listItems.push(listItem);
});

ingredientsList.append(...listItems);
console.log(listItems);

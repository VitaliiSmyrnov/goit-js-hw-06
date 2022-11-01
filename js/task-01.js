const categoriesList = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesList.children.length}`);

for (let i = 0; i < categoriesList.children.length; i++) {
  console.log(`Category: ${categoriesList.children[i].firstElementChild.textContent}
Elements: ${categoriesList.children[i].lastElementChild.children.length}`);
}

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

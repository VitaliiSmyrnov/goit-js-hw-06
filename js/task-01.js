const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.children;
const categoriesItemsCount = categoriesItems.length;

const categoriesFirstItem = categoriesList.firstElementChild;
const categoriesSecondItem = categoriesList.children[1];
const categoriesLastItem = categoriesList.lastElementChild;

const firstCategoryTitle = categoriesFirstItem.firstElementChild;
const firstCategoryTitleText = firstCategoryTitle.textContent;
const firstCategoryList = categoriesFirstItem.lastElementChild;
const firstCategoryItems = firstCategoryList.children;
const firstCategoryItemsCount = firstCategoryItems.length;

const secondCategoryTitle = categoriesSecondItem.firstElementChild;
const secondCategoryTitleText = secondCategoryTitle.textContent;
const secondCategoryList = categoriesSecondItem.lastElementChild;
const secondCategoryItems = secondCategoryList.children;
const secondCategoryItemsCount = secondCategoryItems.length;

const lastCategoryTitle = categoriesLastItem.firstElementChild;
const lastCategoryTitleText = lastCategoryTitle.textContent;
const lastCategoryList = categoriesLastItem.lastElementChild;
const lastCategoryItems = lastCategoryList.children;
const lastCategoryItemsCount = lastCategoryItems.length;

console.log(`Number of categories: ${categoriesItemsCount}

Category: ${firstCategoryTitleText}
Elements: ${firstCategoryItemsCount}

Category: ${secondCategoryTitleText}
Elements: ${secondCategoryItemsCount}

Category: ${lastCategoryTitleText}
Elements: ${lastCategoryItemsCount}`);

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

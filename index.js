/*
Написати скрипт, який буде запитувати користувача 2 числа, після введення яких має показатись вікно з результатом суми, різниці, додатку і ділення даних чисел.
Створити новий документ і підключити скрипт на сторінку. Діалогове вікно має відкриватись при завантаженні документу.
Створити новий репозиторій і відправити зміни в новостворений репозиторій та додайте посилання на нього в особистий кабінет.
*/

const a = parseInt(prompt("Enter any number"));
let b = parseInt(prompt("Enter any number, exept '0'"));

const sum = a + b;
const substraction = a - b;
let division;
if (b !== 0) {
  division = a / b;
} else {
  division = "You entered 0, but it is not possible to divide by 0";
}
const multiplication = a * b;
alert(`
  addition : ${sum};
  substraction : ${substraction};
  division : ${division};
  multiplication : ${multiplication}`);

/*
Використовуючи скрипт з заняття 21 доповнити його наступним:

1. Ввести перевірку на 0 при ділені. Якщо друге число нуль – виводити повідомлення про помилку замість результату ділення.

2. Якщо перше число меньше другого показувати повідомлення “Ви впевнені, що хочете продовжити операцію?”. Після підтвердження – показати результат. віднімання, в противному випадку пропустити повідомлення з показом результату

3. Якщо одне з полів пусте – показати помилку і не виконувати подальші операції.

4. Додайте посилання на репозиторій в особистий кабінет.
*/

let a = parseInt(prompt("Enter any number"));
let b = parseInt(prompt("Enter any number, exept '0'"));
if (isNaN(a) || isNaN(b)) {
  alert(
    "Error! One or two numbers are missing! Reload the page and try again!"
  );
} else {
  if (b !== 0) {
    alert(`division : ${a / b};`);
  } else {
    alert("You entered 0, but it is not possible to divide by 0");
  }
  if (a < b) {
    if (confirm("Are you sure you want to continue?")) {
      alert(`substraction : ${a - b};`);
    }
  } else {
    alert(`substraction : ${a - b};`);
  }
  alert(`addition : ${a + b}`);

  alert(`multiplication : ${a * b}`);
}

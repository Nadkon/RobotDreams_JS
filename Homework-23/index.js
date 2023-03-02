// 1. Створити новий масив на 10 елементів з довільними числами.

const arrayNumbers = [487, 32, 6, 83, 9432, 3, 738, 7, 12324, 9843];

// 2. Написати скрипт для пошуку суми елементів масиву

let sum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  sum += arrayNumbers[i];
}
console.log(sum);

// 3. Написати скрипт, який буде шукати мінімальне та максимальне значення елементів масиву.
// Varian 1
console.log(Math.min(...arrayNumbers));
console.log(Math.max(...arrayNumbers));

// Varian 2
let min = arrayNumbers[0];
for (let i = 0; i < arrayNumbers.length; i++) {
  if (min > arrayNumbers[i]) {
    min = arrayNumbers[i];
  }
}
console.log(`min is ${min}`);

let max = arrayNumbers[0];
for (let i = 0; i < arrayNumbers.length; i++) {
  if (max < arrayNumbers[i]) {
    max = arrayNumbers[i];
  }
}
console.log(`max is ${max}`);

// 4. В пунктах 2 та 3 потрібно робити перевірку на тип елементу масиву і не брати до уваги елементи які не є числами
const newArray = ["abc", 32, 6, false, 9432, 3, 738, "", 12324, 9843];
let sum2 = 0;
let min2 = +999999999;
let max2 = -999999999;

for (let i = 0; i < newArray.length; i++) {
  if (Number.isInteger(newArray[i])) {
    sum2 += newArray[i];
    if (min2 > newArray[i]) {
      min2 = newArray[i];
    }
    if (max2 < newArray[i]) {
      max2 = newArray[i];
    }
  } else {
    continue;
  }
}
console.log(`sum of new array is ${sum2}`);
console.log(`min of new array is ${min2}`);
console.log(`max of new array is ${max2}`);

// 5. Написати скрипт який виведе наступне: напівялинка
let symbol = "#";
let img = "";

for (let i = 0; i < 5; i++) {
  img = img + symbol;
  console.log(img);
}

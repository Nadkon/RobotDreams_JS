// 1. Напишіть функцію, яка буде перевіряти обʼєкт на пустоту
function objectIsEmpty(obj) {
  console.log(obj);
  if (Object.keys(obj).length === 0) {
    alert(`the object is empty`);
  } else {
    alert(`the object is not empty`);
  }
}
const newObejct = {};
const newObejct2 = {
  name: "Nadiia",
  age: 41,
};
/*
objectIsEmpty(newObejct);
objectIsEmpty(newObejct2);
*/

// 2. Опишіть обʼєкт user з полями name, age та методом sayHello, результатом виклику якого має бути повідомлення “Привіт, я name, мені age років”

const user = {
  name: "Nadiia",
  age: 41,
  sayHello() {
    alert (`Hello! My name is ${this.name}. I am ${this.age} years old`);
  },
};
/*
user.sayHello();
*/


// 3. Напишіть обʼєкт калькулятор. Він має містити метод ask, sum та mul. При виклику методу ask обʼєкт має запросити 2 числа та зберегти їх, як свої властивості. При виклику sum - вивести суму збережених чисел, при виклику mul - додаток чисел.

const calculator = {
  firstNumber: 0,
  secondNumber: 0,
  ask() {
    this.firstNumber = parseInt(prompt("Enter the first number"));
    this.secondNumber = parseInt(prompt("Enter the second number"));
  },
  sum() {
    alert(`The sum is ${this.firstNumber + this.secondNumber}`);
  },
  mul() {
    alert(`The multiplication is ${this.firstNumber * this.secondNumber}`);
  },
};
// calculator.ask();
// calculator.sum();
// calculator.mul();

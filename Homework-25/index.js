// 1. Напишіть функцію, яка буде перевіряти обʼєкт на пустоту
function objectIsEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    console.log("object is empty");
  }
}
const newObejct = {};
objectIsEmpty(newObejct);

// 2. Опишіть обʼєкт user з полями name, age та методом sayHello, результатом виклику якого має бути повідомлення “Привіт, я name, мені age років”

const user = {
  name: "Nadiia",
  age: 41,
  sayHello() {
    alert`Hello! My name is ${this.name}. I am ${this.age} years old`;
  },
};
user.sayHello();

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
calculator.ask();
calculator.sum();
calculator.mul();

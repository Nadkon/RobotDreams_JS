/*
1. Створити конструктор Accumulator. Даний конструктор має приймати число, яке буде початковим значенням. Клас має реалізувати методи increment, при виклику якого передане значення має збільшуватись на 1, та decrement, при виклиці якого значення має зменшуватись.
*/

function Accumulator(number) {
  this.initialnumber = number;
  this.number = number;
}

Accumulator.prototype.increment = function () {
  return (this.number += 1);
};

Accumulator.prototype.decrement = function () {
  return (this.number -= 1);
};
const test1 = new Accumulator(2);


/*
test1.increment();
console.log(`for test1 the number is ${test1.number}`);
test1.increment();
console.log(`for test1 the number is ${test1.number}`);
test1.decrement();
console.log(`for test1 the number is ${test1.number}`);
*/

/*
2. Створити конструктор CancelableAccumulator, який буде наслідувати Accumulator та додатково буде реалізовувати метод clear, при виклику якого значення збереженого числа має стати таким, яким його передали в конструкторі.
*/
function CancelableAccumulator(number) {
  Accumulator.call(this, number);
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

CancelableAccumulator.prototype.clear = function () {
  return this.number = this.initialnumber
}


const test2 = new CancelableAccumulator(20);

test2.increment();
console.log(`for test2 the number is ${test2.number}`);
test2.increment();
console.log(`for test2 the number is ${test2.number}`);
test2.decrement();
console.log(`for test2 the number is ${test2.number}`);
test2.decrement();
console.log(`for test2 the number is ${test2.number}`);
test2.decrement();
console.log(`for test2 the number is ${test2.number}`);
test2.decrement();
console.log(`for test2 the number is ${test2.number}`);
test2.decrement();
console.log(`for test2 the number is ${test2.number}`);
test2.clear();
console.log(`for test2 the number is ${test2.number}`);

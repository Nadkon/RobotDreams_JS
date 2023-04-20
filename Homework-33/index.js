// 1. Реалізувати метод .pow(n) для масиву при виклику, якого всі елементи масиву мають бути піднесенні до степеню n.
Array.prototype.pow = function (n) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(Math.pow(this[i], n));
  }
  return newArr;
};

const arr = [1, 2, 3];
console.log(arr.pow(3));

// 2. Додати до функції метод defer(n), який має виконати тіло функції через n мілісекунд.
function a() {
  alert("test");
}

a.defer = function (n) {
  setTimeout(a, n);
};
a.defer(3000);

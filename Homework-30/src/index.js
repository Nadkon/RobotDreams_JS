const btn = document.querySelector(".js-button");

function onClick(e) {
  console.log("click", e.target);
}

btn.addEventListener("click", onClick);

// HOMEWORK-24 (бо у 23 ДЗ лише цикли------------------------------
// Array

function searchMin(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

function searchMax(array) {
  let max = array[0];
  let i = 0;

  while (i < array.length) {
    if (max < array[i]) {
      max = array[i];
    }
    i++;
  }

  return max;
}

// Calculator

function errorMessage() {
  return "Error!";
}

function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    errorMessage();
  } else {
    return a + b;
  }
}

function divide(a, b) {
  if (isNaN(a) || isNaN(b)) {
    errorMessage();
  } else if (b !== 0) {
    return a / b;
  } else {
    return "Error!";
  }
}

function substract(a, b) {
  if (isNaN(a) || isNaN(b)) {
    errorMessage();
  } else {
    return a - b;
  }
}

function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) {
    errorMessage();
  } else {
    return a * b;
  }
}

// Homework-26
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

function CancelableAccumulator(number) {
  Accumulator.call(this, number);
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

CancelableAccumulator.prototype.clear = function () {
  return (this.number = this.initialnumber);
};

// HOMEWORK-28

const img = document.querySelector(".img");
const summary = document.querySelector(".summary");
const skills = document.querySelector(".skills");
const experience = document.querySelector(".experience");
const achievements = document.querySelector(".achievements");

// Збільшення фото

function photoEnlarge(e) {
  img.classList.toggle("animation");
  console.log("click", e.target);
}

img.addEventListener("click", photoEnlarge);


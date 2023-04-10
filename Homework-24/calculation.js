// let a = parseInt(prompt("Enter any number"));
// let b = parseInt(prompt("Enter any number, except '0'"));

function errorMessage() {
  alert(
    "Error! One or two numbers are missing! Reload the page and try again!"
  );
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

function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    errorMessage();
  } else {
    return a + b;
  }
}

function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) {
    errorMessage();
  } else {
    return a * b;
  }
}
divide(a, b);
substract(a, b);
add(a, b);
multiply(a, b);

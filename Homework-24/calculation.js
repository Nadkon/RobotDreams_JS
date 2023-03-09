let a = parseInt(prompt("Enter any number"));
let b = parseInt(prompt("Enter any number, except '0'"));

function divide(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert(
      "Error! One or two numbers are missing! Reload the page and try again!"
    );
  } else if (b !== 0) {
    alert(`division : ${a / b};`);
  } else {
    alert("You entered 0, but it is not possible to divide by 0");
  }
}

function substract(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert(
      "Error! One or two numbers are missing! Reload the page and try again!"
    );
  } else if (a < b) {
    if (confirm("Are you sure you want to continue?")) {
      alert(`substraction : ${a - b};`);
    }
  } else {
    alert(`substraction : ${a - b};`);
  }
}

function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert(
      "Error! One or two numbers are missing! Reload the page and try again!"
    );
  } else {
    alert(`addition : ${a + b}`);
  }
}

function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert(
      "Error! One or two numbers are missing! Reload the page and try again!"
    );
  } else {
    alert(`multiplication : ${a * b}`);
  }
}
divide(a, b);
substract(a, b);
add(a, b);
multiply(a, b);

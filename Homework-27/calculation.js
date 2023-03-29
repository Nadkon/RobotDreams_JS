const result = document.getElementById("result");

let a = parseInt(prompt("Enter any number"));
let b = parseInt(prompt("Enter any number, except '0'"));

// to create element
function createElement(message) {
  let newElement = document.createElement("div");
  newElement.textContent = message;
  return newElement;
}

// to get error message
function errorMessage() {
  result.style.color = "purple";
  result.style.fontWeight = "bold";
  result.textContent =
    "Error! One or two numbers are missing! Reload the page and try again!";
}

// to get correct color for substruct function
function getColorForSubstruction(res) {
  let newElement = createElement(`substraction : ${res}`);
  if (res > 0) {
    newElement.style.color = "rgba(250,0,0,1)";
  } else if (res == 0) {
    newElement.style.color = "rgba(250,0,0,0.7)";
  } else if (res < 0) {
    newElement.style.color = "rgba(250,0,0,0.4)";
  }
  return newElement;
}

// main functions
function divide(a, b) {
  if (isNaN(a) || isNaN(b)) {
    errorMessage();
  } else if (b !== 0) {
    let newElement = createElement(`division : ${a / b}`);
    result.append(newElement);
  } else {
    result.textContent = "You entered 0, but it is not possible to divide by 0";
  }
}

function substract(a, b) {
  if (isNaN(a) || isNaN(b)) {
    errorMessage();
  } else {
    if (a > b) {
      let newElement = getColorForSubstruction(`${a - b}`);
      result.append(newElement);
    } else {
      if (!confirm("Are you sure you want to continue?")) {
        let newElement = createElement(
          "The result of substraction was omitted!"
        );
        result.append(newElement);
      } else {
        let newElement = getColorForSubstruction(`${a - b}`);
        result.append(newElement);
      }
    }
  }
}

function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    errorMessage();
  } else {
    let newElement = createElement(`addition : ${a + b}`);
    if (`${a + b}` > 0) {
      newElement.style.color = "rgba(0, 250, 0, 1)";
    } else if (`${a + b}` == 0) {
      newElement.style.color = "rgba(0, 250, 0, 0.7)";
    } else if (`${a + b}` < 0) {
      newElement.style.color = "rgba(0, 250, 0, 0.4)";
    }
    result.append(newElement);
  }
}

function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) {
    errorMessage();
  } else {
    let newElement = createElement(`multiplication : ${a * b}`);
    result.append(newElement);
  }
}

// function's calling
divide(a, b);
substract(a, b);
add(a, b);
multiply(a, b);

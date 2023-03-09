const arrayNumbers = [487, 32, 6, 83, 9432, 3, 738, 7, 12324, 9843];

function searchMin(array) {

  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  console.log(`min is ${min}`);
}

function searchMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
    console.log(`max is ${max}`);
}

searchMax(arrayNumbers);
searchMin(arrayNumbers);

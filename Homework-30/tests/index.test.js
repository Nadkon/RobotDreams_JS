describe("Check user event", () => {
  const desc = "<p>Check if button was clicked</p>";

  describe(desc, () => {
    it("Check if button was clicked", () => {
      spyOn(console, "log");
      onClick({
        target: "button",
      });
      expect(console.log).toHaveBeenCalled();
    });
  });
});

// HOMEWORK-24 (бо у 23 ДЗ лише цикли------------------------------

// ARRAY
describe("Check function for min number search", () => {
  const arrayNumbers = [487, 32, 6, 83, 9432, 3, 738, 7, 12324, 9843];
  it("Should return 3", function () {
    expect(searchMin(arrayNumbers)).toBe(3);
  });
});

describe("Check function for max number search", () => {
  const arrayNumbers = [487, 32, 6, 83, 9432, 3, 738, 7, 12324, 9843];
  it("Should return 12324", function () {
    expect(searchMax(arrayNumbers)).toBe(12324);
  });
});

// CALCULATOR

describe("Check addition", () => {
  it("2+3 should be 5", function () {
    expect(add(2, 3)).toBe(5);
  });
});

describe("Check dividing", () => {
  it("3 / 3 should be 1", function () {
    expect(divide(3, 3)).toBe(1);
  });
  it("3 / 0 should be error message", function () {
    expect(divide(3, 0)).toBe("Error!");
  });

  // НЕ ВІХОДИТЬ
  //   it("should be error if a is NaN", function () {
  //     spyOn(window, "errorMessage").and.returnValue("Error!");
  //     expect(divide("string", 5)).toBe("Error!");
  //     expect(errorMessage).toHaveBeenCalled();
  //   });
});

describe("Check substraction", () => {
  it("5 - 4 should be 1", function () {
    expect(substract(5, 4)).toBe(1);
  });
});

describe("Check multiplication", () => {
  it("5 * 4 should be 20", function () {
    expect(multiply(5, 4)).toBe(20);
  });
});

// Homework-26
describe("Check increment", () => {
  const test1 = new Accumulator(2);
  it("Should be 3", function () {
    expect(test1.increment()).toBe(3);
  });
});

describe("Check decrement", () => {
  const test1 = new Accumulator(2);
  it("Should be 1", function () {
    expect(test1.decrement()).toBe(1);
  });
});

describe("Check decrement", () => {
  const test2 = new CancelableAccumulator(20);
  it("Should be 20", function () {
    expect(test2.clear()).toBe(20);
  });
});

// Homework-28
describe("Check click to enlarge photo", () => {
   const desc = "<p>Check if the photo was clicked</p>";

  describe(desc, () => {
    it("Check if photo was clicked", () => {
      spyOn(console, "log");
    photoEnlarge({
      target: "img",
    });
      expect(console.log).toHaveBeenCalled();
    });
});
});


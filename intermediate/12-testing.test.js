const sum = require("./11-testing.js");

test("la suma 3 + 5 debe ser 8", () => {
  expect(sum(3, 5)).toBe(8);
});

test("la suma 1 + 1 debe ser 2", () => {
  expect(sum(1, 2)).toBe(2);
});

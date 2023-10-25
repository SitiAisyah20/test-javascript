const fishBash = require("./fishBash");

test("fishBash(5) should return the correct output", () => {
  const result = fishBash(5);
  const expected = ["1", "2", "fish", "4", "bash"];
  expect(result).toEqual(expected);
});

test("fishBash(15) should return the correct output", () => {
  const result = fishBash(15);
  const expected = [
    "1",
    "2",
    "fish",
    "4",
    "bash",
    "fish",
    "7",
    "8",
    "fish",
    "bash",
    "11",
    "fish",
    "13",
    "14",
    "fishbash",
  ];
  expect(result).toEqual(expected);
});

test("fishBash(0) should return an empty array", () => {
  const result = fishBash(0);
  const expected = [];
  expect(result).toEqual(expected);
});

test('fishBash(1) should return ["1"]', () => {
  const result = fishBash(1);
  const expected = ["1"];
  expect(result).toEqual(expected);
});

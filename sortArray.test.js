const { sortAscending, sortDescending } = require("./sortArray");

test("sortAscending should sort the array in ascending order", () => {
  const arr = [3, 7, 2, 1, 8, 4, 5, 6];
  const sortedArr = sortAscending(arr);
  expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test("sortDescending should sort the array in descending order", () => {
  const arr = [3, 7, 2, 1, 8, 4, 5, 6];
  const sortedArr = sortDescending(arr);
  expect(sortedArr).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
});

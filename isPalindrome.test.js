const isPalindrome = require("./isPalindrome");

test("isPalindrome should return true for a palindrome", () => {
  const palindrome = "A man a plan a canal Panama";
  expect(isPalindrome(palindrome)).toBe(true);
});

test("isPalindrome should return false for a non-palindrome", () => {
  const nonPalindrome = "hello world";
  expect(isPalindrome(nonPalindrome)).toBe(false);
});

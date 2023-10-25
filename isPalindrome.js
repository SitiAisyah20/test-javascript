function isPalindrome(inputString) {
  const cleanedString = inputString.toLowerCase().replace(/\s/g, "");

  const reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString;
}

module.exports = isPalindrome;
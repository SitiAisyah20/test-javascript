function fishBash(x) {
  var results = [];
  for (var i = 1; i <= x; i++) {
    var output = "";
    if (i % 3 === 0) {
      output += "fish";
    }
    if (i % 5 === 0) {
      output += "bash";
    }
    if (output === "") {
      output = i.toString();
    }
    results.push(output);
  }
  return results;
}

module.exports = fishBash;
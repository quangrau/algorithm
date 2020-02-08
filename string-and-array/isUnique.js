// "h,e,l,o" => true
// "h,e,l,l,o" => false

// O(N) where N is the length of the string
function isUnique(str) {
  // Using hash-map to store the flag when the character appeared
  var appeared = {};

  // Add character to hash-map
  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);
    if (appeared[c]) {
      return false;
    } else {
      appeared[c] = true;
    }
  }
  return true;
}

module.export = (function() {
  const input = "helo"; // TRUE
  // const input = "hello"; // FALSE
  console.log("Input: ", input);

  const output = isUnique(input);
  console.log("Output: ", output);
})();

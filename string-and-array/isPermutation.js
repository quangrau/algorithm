/*
 * Given two strings s1 and s2, write a function to return true if s2
 * contains the permutation of s1. In other words, one of the first string's
 * permutations is the substring of the second string.
 *
 * Example:
 * Input: s1 = "ab" s2 = "eidbaooo"
 * Output: True
 * Explanation: s2 contains one permutation of s1 ("ba").
 *
 * Note:
 * The input strings only contain lower case letters.
 * The length of both given strings is in range [1, 10,000].
 */

function isMatches(arr1, arr2) {
  // Given strings contains only lowercase alphabets ('a' to 'z').
  // the size is fixed to 26
  for (var i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function count(arr, index) {
  if (arr[index]) {
    arr[index]++;
  } else {
    arr[index] = 1;
  }
}

function isPermutation(s1, s2) {
  var s1Length = s1.length;
  var s2Length = s2.length;

  // Validation
  if (s2Length < s1Length) {
    return false;
  }

  var s1Map = new Array(26);
  for (var i = 0; i < s1Length; i++) {
    const index = s1.charAt(i).charCodeAt() - "a".charCodeAt();
    count(s1Map, index);
  }

  for (var i = 0; i <= s2Length - s1Length; i++) {
    var s2Map = new Array(26);
    for (var j = 0; j < s1Length; j++) {
      const index = s2.charAt(i + j).charCodeAt() - "a".charCodeAt();
      count(s2Map, index);
    }

    // Validate
    if (isMatches(s1Map, s2Map)) {
      return true;
    }
  }

  return false;
}

module.export = (function() {
  console.time("Speed");
  const s1 = "aha";
  const s2 = "eidbashflkajsfohaahahdlncnoqpqjcmdjaooo";
  console.log("Input: ", s1, s2);

  const output = isPermutation(s1, s2);
  console.log("Output: ", output);
  console.timeEnd("Speed");
})();

/*
PROBLEM: write a function that checks if a word is a palindrome and returns a
boolean. A word is a palindrome if it is spelled the same both forwards and
backwards, for example: 'mom' and 'racecar'.

PLAN: There is no user interface for this lab. The tests will be the main 
deliverable. The input will be a string, always in lowercase. The output
will be a boolean value. The necessary steps are:

create a copy of the string
convert the copy to an array
reverse the copy
convert the copy to a string
test if the copy is equal to the original

TEST CASES: See test cases written below in addition to those supplied.

APPROACH: This is a small, easy function to write, making it difficult to 
divide it into separate subtasks.
*/

function isPalindrome(word) {
  return word.split('').reverse().join('') === word ? true : false;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log(`Expecting false: => `, isPalindrome('banana'));
  console.log(`Expecting false: => `, isPalindrome('tween'));
  console.log(`Expecting true: => `, isPalindrome('aha'));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

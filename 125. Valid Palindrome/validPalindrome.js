module.exports = {
  isValid: isValid,
  optimizedIsValid: optimizedIsValid
};
/*
    Given a string s, return true if it is a palindrome, otherwise return false.
    A palindrome is a string that reads the same forward and backward. 
    It is also case-insensitive and ignores all non-alphanumeric characters.

    Constraints:
        1 <= str.length <= 1000
        str is accii 
*/
function isValid(s) {
  /*
  Time Complexity 
  Space Complexity 

  * @param {String} s
  * @return {boolean}
  */
  

  let compS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let head = 0;
  let tail = compS.length - 1;

  while (head < tail) {
    if (compS[head] != compS[tail]) {
      return false;
    }
    head++;
    tail--;
  }
  return true;
}


function optimizedIsValid() {
  
  
}
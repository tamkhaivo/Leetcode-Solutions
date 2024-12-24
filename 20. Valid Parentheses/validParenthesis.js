module.exports = {
  isValid: isValid,
  optimizedIsValid: optimizedIsValid
};
/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.

    Constraints:
        2 <= nums.length <= 10^4
        -10^9 <= nums[i] <= 10^9
        -10^9 <= target <= 10^9
        Only one valid answer exists.
    
*/
function isValid(s) {
    /*
    Time Complexity - O(n)
    Space Complexity - O(n)

    * @param {String} s
    * @return {boolean}
    */
    
    if (s.length === 1) {
        return false;
    }
    const bracketMap = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    }
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
            stack.push(s[i]);
        }  else {
            const topEle = stack.pop();
            if (bracketMap[s[i]] !== topEle) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

  

function optimizedIsValid(s) {
    /*
    Time Complexity - O(n)
    Space Complexity - O(n)

    * @param {String} s
    * @return {boolean}
    */

    if(s.length & 1) return false;  

    const stack = []; 
    const beginningSet = new Set(['(','{','[']); 
    const object = {
        ")":"(",
        "}":"{",
        "]":"[",
    } 
    for(const char of s){
        if(beginningSet.has(char)){
            stack.push(char)
            continue
        }  
        if(stack[stack.length-1] == object[char]){
            stack.pop()
            continue
        }
        return false;                  
    }
    return (stack.length == 0);
}
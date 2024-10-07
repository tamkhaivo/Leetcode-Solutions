module.exports = {
  isAnagram: isAnagram,
  optimizedIsAnagram: optimizedIsAnagram
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
function isAnagram(s, t) {
    /*
    Time Complexity - O(n^2)
    Space Complexity - O(1)

    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
    */
    
    
    
    if (s.length != t.length) return false;

    let sMap = new Map();

    for(sL of s){
        if(!sMap.has(sL)){
            sMap.set(sL, 0);
        }
        sMap.set(sL, sMap.get(sL) + 1);
    }

    for(sT of t){
        if(!sMap.has(sT) || sMap.get(sT) == 0){
            return false;
        }            
        sMap.set(sT, sMap.get(sT) - 1)
    }
    return true;

}
function optimizedIsAnagram(s, t) {
    /*
    Time Complexity - O(n)
    Space Complexity - O(n)

    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
    */
    if(s.length != t.length) return false;

    let sMap = new Map();

    for(sL of s){
        if(!sMap.has(sL)){
            sMap.set(sL, 0);
        }
        sMap.set(sL, sMap.get(sL) + 1);
    }

    for(sT of t){
        if(!sMap.has(sT) || sMap.get(sT) == 0){
            return false;
        }            
        sMap.set(sT, sMap.get(sT) - 1)
    }
    return true;
}
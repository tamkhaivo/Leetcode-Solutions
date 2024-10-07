module.exports = {
  containsDuplicate: containsDuplicate,
  optimizedContainsDuplicate: optimizedContainsDuplicate
};
/*
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
    
    Constraints:
    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
    
*/
function containsDuplicate(nums) {
    /*
    
    Time Complexity - O(n^2) ** List Implementation
    Space Complexity - O(n)

    * @param {String || array [] } 
    * @return {Boolean}
    */
    let seen = [];
    for (const num of nums) {
        if (num in seen) return true;
        seen.push(num);
    }
    return false;
}
function optimizedContainsDuplicate(nums) {
    /*
    Time Complexity - O(n)
    Space Complexity - O(n)

    * @param {String || array [] } 
    * @return {Boolean}
    */
    
    let set = new Set();
    for (const nums of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false; 
}
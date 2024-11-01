module.exports = {
  twoSum: twoSum,
  optimizedTwoSum: optimizedTwoSum
};
/*
    Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
    find two numbers such that they add up to a specific target number. 
    Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
    Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
    The tests are generated such that there is exactly one solution. You may not use the same element twice.
    Your solution must use only constant extra space.


Constraints:

    2 <= numbers.length <= 3 * 104
    -1000 <= numbers[i] <= 1000
    -1000 <= target <= 1000
    numbers is sorted in ascending order.

    
*/
function twoSum(nums, target) {
    /*
        Time Complexity - O(n)
        Space Complexity - O(1)

        * @param {number[]} nums
        * @param {number} target
        * @return {number[]}
    */
    
    if (nums.length < 2) return [];
    let head = 0;
    let tail = nums.length - 1;
    let difference = target - nums[tail];

    while (nums[head] + nums[tail] != target) {
        if (difference < 0) {
            tail--;
        }
        if (difference > 0) {
            head++;
        }
        difference = target - (nums[head] + nums[tail]);
    }


    return [head+1, tail+1];
}
function optimizedTwoSum(nums, target) {
    /*
    Time Complexity - O(n)
    Space Complexity - O(n)

    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
    */
    if (nums.length < 2) return [];

    const map = new Map();
    let diff = 0;
    for (const item in nums) {
        diff = target - nums[item];
        if (map.has(diff)) {
            return [Number(map.get(diff)), Number(item)]
        }
        map.set(nums[item], item);
    }
    return [];
}




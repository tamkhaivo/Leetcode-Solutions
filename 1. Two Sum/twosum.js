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
/*
    Time Complexity - O(n^2)
    Space Complexity - O(1)

    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
*/

function twoSum(nums, target) {
    for (let x = 0; x < nums.length; x++) {
        for (let y = x + 1; y < nums.length; y++){
            if (nums[x] + nums[y] === target) {
                return [x, y];
            }
        }
    }
    return [];
}
/*
    Time Complexity - O(n)
    Space Complexity - O(n)

    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
*/
function optimizedTwoSum(nums, target) {
    const map = new Map();
    let diff = 0;
    for (const item in nums) {
        diff = target - nums[item];
        if (map.has(diff)) {
            return [map.get(diff), item]
        }
        map.set(nums[item], item);
    }
    return [];
}
module.exports = {
  twoSum: twoSum,
  optimizedTwoSum: optimizedTwoSum
};
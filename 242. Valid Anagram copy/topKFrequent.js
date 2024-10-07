module.exports = {
  topKFrequent: topKFrequent,
  optimizedTopKFrequent: optimizedTopKFrequent
};
/*
    Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
    
    Constraints:
        1 <= nums.length <= 105
        -104 <= nums[i] <= 104
        k is in the range [1, the number of unique elements in the array].
        It is guaranteed that the answer is unique.
    
*/
function topKFrequent(nums, k) {
    /*
    Time Complexity - O(n log n)
    Space Complexity - O(n)

    * @param {number[]} nums
    * @param {number} k
    * @return {number[]}
    */
    let map = new Map();
    let ret = []
    
    for (num of nums) {
        if (!map.has(num)) {
            map.set(num, 0);
        }
        map.set(num, map.get(num) + 1);
    }

    ret = Array.from(map.values()).sort((a, b) => {
        return map.get(b) - map.get(a);
    });
    ret = ret.slice(0, k)
    return ret

}
function optimizedTopKFrequent(nums, k) {
    /*
    Time Complexity - 
    Space Complexity - 

    * @param {number[]} nums
    * @param {number} k
    * @return {number[]}
    */
    
}
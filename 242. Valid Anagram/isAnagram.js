module.exports = {
  isAnagram: isAnagram,
  optimizedIsAnagram: optimizedIsAnagram
};
/*
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    Needs Update:
        Add Multiword Anagrams

    Constraints:
        2 <= nums.length <= 10^4
        -10^9 <= nums[i] <= 10^9
        -10^9 <= target <= 10^9
        Only one valid answer exists.
    
*/
function isAnagram(s, t) {
    /*
    Time Complexity - O(n log n)
    Space Complexity - O(n)

    * @param {String} s
    * @param {String} t
    * @return {Boolean}
    */
    
    if(s.length !== t.length) return false
    
    const sortedS = s.toLowerCase().split("").sort().join("")
    const sortedT = t.toLowerCase().split("").sort().join("")

    return sortedS == sortedT;

}
function optimizedIsAnagram(s, t) {
    /*
    Time Complexity - O(n)
    Space Complexity - O(n)

    * @param {String} s
    * @param {String} t
    * @return {Boolean}
    */
    if(s.length != t.length) return false;

    let sMap = new Map();

    for (sL of s) {
        let char = sL.toLowerCase();
        if(!sMap.has(char)){
            sMap.set(char, 0);
        }
        sMap.set(char, sMap.get(char) + 1);
    }

    for (sT of t) {
        let char = sT.toLowerCase();

        if(!sMap.has(char) || sMap.get(char) == 0){
            return false;
        }            
        sMap.set(char, sMap.get(char) - 1)
    }
    return true;
}
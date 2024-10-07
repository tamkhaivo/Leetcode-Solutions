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
    
    const sortedS = s.split("").sort().join("")
    const sortedT = t.split("").sort().join("")

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
module.exports = {
  isAnagram: isAnagram,
  optimizedIsAnagram: optimizedIsAnagram
};
/*
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    Constraints:
       1 <= s.length, t.length <= 5 * 104

    
*/
function isAnagram(s, t) {
    /*
    Time Complexity - O(n log n)
    Space Complexity - O(n)

    * @param {String} s
    * @param {String} t
    * @return {Boolean}
    */
        
    const sortedS = s.toLowerCase().split("").sort().join("").trimStart()
    const sortedT = t.toLowerCase().split("").sort().join("").trimStart()

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
    
    let sMap = new Map();

    for (const sL of s) {
        let char = sL.toLowerCase();
        if (char == " ") continue;

        if(!sMap.has(char)){
            sMap.set(char, 0);
        }
        sMap.set(char, sMap.get(char) + 1);
    }

    for (const sT of t) {
        let char = sT.toLowerCase();
        if (char == " ") continue;

        if(!sMap.has(char) || sMap.get(char) == 0){
            return false;
        }            
        sMap.set(char, sMap.get(char) - 1)
    }

    for (val of sMap.values()) {
        if (val != 0) return false;
    }
    return true;
}
/*
    Given 2 Strings of Binary Respesntations of S and T, 
    You can rearrange T such that S xor T is the maximum value you can get after you XOR s^t.

 */
module.exports = {
  maxValueXOR: maxValueXOR,
  optimizedMaxValueXOR: optimizedMaxValueXOR
};
function maxValueXOR(s, t) {
    // Write your code here
    let sZero = [];
    let tOneCount = 0;
    let newT = "0".repeat(s.length);
    // 
    for(let x = 0; x < s.length; x++){
        if(s[x] === '0'){
            sZero.push(x);
        }
        if(t[x] === '1'){
            tOneCount++
        }
    }
    // fill zero spots from S 
    for(const ind of sZero){
        if(tOneCount > 0){
            newT = replaceChar(newT, ind, "1");
            tOneCount--;
        }
        if(tOneCount == 0){
            break;
        }
    }
    // tCout = 0

    // fill lower spots of newT with 1s
    for(let x = newT.length; x > 0; x--){
        if(tOneCount > 0 && newT[x-1] === '0'){
            newT = replaceChar(newT, x-1, "1");
            tOneCount--;
        }
        if(tOneCount == 0){
            break;
        }
    }
    return xOR(s, newT)
}
function replaceChar(str, ind, char){
    return str.slice(0, ind) + char + str.slice(ind + 1)
}
function xOR(str1, str2){
        let res = "";
        for(let x = 0; x < str1.length; x++){
            const char1 = str1.charCodeAt(x) - 48;
            const char2 = str2.charCodeAt(x) - 48;
            res += (char1^char2).toString();
        }
        return res;
} 




function optimizedMaxValueXOR(s, t) {
    let sInt = parseInt(s,2)
    let tInt = parseInt(t, 2)

    let newT = tInt
    let highestBit

    for (let i in s.length) {
        if (sInt & (1 << i) != 0) {
            highestBit = newT & - newT
            if (highestBit < (1 << i)) {
                tInt ^= (1 << i) | highestBit
            }
        }
    }
    return (sInt ^ tInt).toString(2)
}


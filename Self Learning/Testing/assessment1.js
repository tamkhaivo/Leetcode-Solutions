/*
    Assessment 2024: 49 42 4D
    Given 2 Strings of Binary Respesntations of S and T, 
    You can rearrange T such that S xor T is the maximum value you can get after you XOR s^t.

 */
module.exports = {
    maxValueXOR: maxValueXOR,
    optimizedMaxValueXOR: optimizedMaxValueXOR,
    binary32BitMaxValueXOR: binary32BitMaxValueXOR
};

function maxValueXOR(s, t) {
    /*
    Time Complexity - O(n^2) 
    Space Complexity - O(n^2)

    * @param {string, string} s, t 
    * @return {string}
    */
   
    let sZero = [];
    let tOneCount = 0;
    let newT = "0".repeat(s.length);

    // Count Zeros from S and Ones from T
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
    /*
    Time Complexity - O(n) 
    Space Complexity - O(n)

    * @param {string, string} s, t 
    * @return {string}
    */
   
    let sIntArr = s.split("").map((item) => parseInt(item));
    let tIntArr = t.split("").map((item) => parseInt(item));
    let newT = new Array(s.length).fill(0);
    let sZero = [];
    let tOneCount = 0;
    let maxValueXOR = [];

    // Get Zero Indexes from s and Count Ones from t
    for(let x = sIntArr.length - 1 ; x >= 0; x--){
        if(~sIntArr[x] & 1){
            sZero.push(x); //HSB on TOP
        }
        if(tIntArr[x] & 1){
            tOneCount++
        }
    }

    // Fill 1s to NewT in Zero Indexes from S (HSB to LSB)
    while (sZero.length > 0) {
        if (tOneCount <= 0) break;
        newT[sZero.pop()] = 1
        tOneCount--;
    }
    
    // Fill Remaining 1s to NewT from the LSB to HSB
    for (let index = newT.length - 1; tOneCount > 0; index--){
        if (newT[index] & 1) continue;
        newT[index] = 1
        tOneCount--;
    }
    
    // XOR Each Bit... Possible to break into 32 bit xor at one time instead of perBit?
    for(let x = 0; x < sIntArr.length; x++){
        maxValueXOR[x] = sIntArr[x] ^ newT[x];
    }

    return maxValueXOR.join("")
    

}

// 32 Bit-limitation aka 1 signed bit + 31 bit  == String Length cannot be >31 
function binary32BitMaxValueXOR(s, t) { 
    /*
    Time Complexity - O(n) 
    Space Complexity - O(n)

    * @param {string, string} s, t 
    * @return {string}
    */
    if (s.length > 31 || t.length > 31) {
        throw new Error("Error: Exceeds 32BitOperation JS Limitation");
    }
    let sInt = parseInt(s,2)
    let tInt = parseInt(t,2)

    let oneCount = 0;
    let stack = [];

    let newT = 0;
    
    // Iterate from LSB to HSB 
    for (let index = 0; index < t.length; index++) {
        if (tInt & (1 << index)) // Check for 1s in t
            oneCount++
        if (~sInt & (1 << index)) // Check for 0s in s
            stack.push(index);
    }

    // Fill Zero Indexes HSB to LSB
    while (stack.length > 0) {
        if ((oneCount <= 0)) break;
        newT = newT | (1 << stack.pop())
        oneCount--;
    }
    
    // Fill Remaining Ones from LSB to HSB
    for (let index = 0; oneCount > 0; index++){
        if (newT & (1 << index)) continue;
        newT = newT | (1 << index)
        oneCount--;
    }

    return (sInt ^ newT).toString(2)
}






/*
    Given 2 Strings of Binary Respesntations of S and T, 
    You can rearrange T such that S xor T is the maximum value you can get after you XOR s^t.

 */
module.exports = {
    maxValueXOR: maxValueXOR,
    optimizedMaxValueXOR: optimizedMaxValueXOR,
    binary32BitMaxValueXOR: binary32BitMaxValueXOR
};

function maxValueXOR(s, t) {
    // Write your code here
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
    
}


// 32 Bit-limitation aka 1 signed bit + 31 bit  == String Length cannot be >31 
function binary32BitMaxValueXOR(s, t) { 
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

    
    while (stack.length > 0) {
        if ((oneCount <= 0)) break;
        newT = newT | (1 << stack.pop())
        oneCount--;
    }
    
    for (let index = 0; oneCount > 0; index++){
        if (newT & (1 << index)) continue;
        newT = newT | (1 << index)
        oneCount--;
    }

    return (sInt ^ newT).toString(2)
}






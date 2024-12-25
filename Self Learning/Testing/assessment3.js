/*
    Assessment 2024: 55 62 65 72
*/
/*
module.exports = {
    maxValueXOR: maxValueXOR,
    optimizedMaxValueXOR: optimizedMaxValueXOR,
    binary32BitMaxValueXOR: binary32BitMaxValueXOR
};

*/



/*

    Given an Int array. Consider the elements in PAIRs (arr[0], arr[1])
    arrange each pair in ascending order. 
    
    arr = [1, 5, 7, 3, 2, 1]
    solution = [1, 5, 3, 7, 1, 2]

*/




/*

    Given an string `message` and an Integer `n`, 
    Replace every nth consonent with the next consonent from the aphabet while keeping the case consistent;
        
    b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z, 

    z goes to b;


    message = CodeSignal n = 3
    solution = CodeTignam


*/



/*

    Imagine you were formatting text that will appear on a newsletter page.
    Given a paragraphs is an array of paragraphs, where each paragraph has chunks of text.
    Widths represents the maximum number of characters that can fit on each line of the newspaper page. 

    - For each paragraph start a new line.
    - When portions of text is togeter on a line, they are seperated by 1 space
    - you cannot break up portions of text, you have to start a new line with the entire word.
    - You may end up with left over space on a line.. 
         if even equal number of spaces before and after
         if odd add the extra space after the text
    - There will be an * character border around the output.

  
    paragraphs = [["hello", "world"], ["How", "areYou", "doing"], ["Please look", "and align", "to center"]]
    width = 16

    solution = ["******************",
                 *  hello world   *"
                 *How areYou Doing*"
                 *  Please look   *"
                 *   and align    *"
                 *    to center   *"
                "******************"]

*/




/*

    You are monitoring the building density in a district of houses. 
    The district is represented as a number line, where a house can be built at a numbered point on the line if
    If at least 1 of the neighboring points is not occupied.

    Given queries, an array of Int represnting locations of new homes in order in wich they will be built
    after each house is built, your task is to find the longest segment of contiguous houses in a disctict

    return an array of inters represetngint the longset segment of contigous houes from queresi is built.

    queries [1,3,0,4]
    solution = [1,1,2,2]


    [0, 0, 0, 0, 0]
    [0, 1, 0, 0, 0] output: [1]
    [0, 1, 0, 1, 0] output: [1,1]
    [1, 1, 0, 1, 0] output: [1,1,2]
    [1, 1, 0, 1, 1] output: [1,1,2,2]
*/


/*

    Data Specification

    Field	        Size            Description
    Version Number	1 byte	        Indicates version of the format
    Flag Length	    4 bytes	        Length of the Flag field
    Flag	        X bytes	        Variable-length flag data


    Data Layout
    Offset	        0x00	        0x01	        0x02	        0x03
    0x00	        Version Number	Flag Length	    Flag Length	    Flag Length
    0x04	        Flag Length	    Flag	        Flag	        Flag
    0x08	        Flag	        Flag	        Flag	        Flag
    ...

*/

/*
let ar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-"
let encrypted = ["CF", "ACEF3257", "4f", "20","5e", "e1", "f4", "bb", "67", "08", "31", "59", "30", "fc", "94"]
let key = ["CC", "acef325a", "2"];
let res = [];
let flag = []
let append = []
let char;
for (let x = 0; x < 2; x++){
    console.log(parseInt(encrypted[x], 16), parseInt(key[x], 16))
    res.push(parseInt(encrypted[x], 16) ^ parseInt(key[x], 16))
}

for (let x = 2; x < encrypted.length; x++){
    append = []
    for (let x = 1; x < 256; x++){
        char = String.fromCharCode(parseInt(encrypted[x], 16) ^ x)
        if (ar.includes(char)){
            append.push(char)
        }
    }
    flag.push(append);
}
console.log(flag)



*/


/*

function coachTimings(commands) {
    let stack = [];
    let count = 0;
    for (const command of commands) {
        if (stack.length > 0 && (command == "L" || command == "R")) {
            stack.pop();
            count++
            continue;
        }
        if (stack.length == 0 && (command == "L" || command == "R")) {
            stack.push(command);
            continue;
        }
        if (stack.length == 0 && command == "A") {
            count++;
            continue;
        }
    }
    return count;
}

function reverseVowels(string) {
    let set = new Set(["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]);
    let vowels = [];

    let temp = string.split("");
    for (const char of temp) {
        if (set.has(char)) {
            vowels.push(char)
        }
    }
    for (let x = 0; x < temp.length; x++) {
        if (set.has(temp[x])) {
            temp[x] = vowels.pop();
        }
    }
    return temp.join("");
}


function addBinaryStrings(a, b) {
    let carry = false;

    let ret = "";
    let aValue;
    let bValue;

    let aStack = [];
    let bStack = [];
    let retStack = []

    for (const bit of a) {
        aStack.push(bit)
    }
    for (const bit of b) {
        bStack.push(bit)
    }

    while (aStack.length > 0 && bStack.length > 0) {
        aValue = Number(aStack.pop())
        bValue = Number(bStack.pop())
        
        if (aValue + bValue + carry == 3) {
            carry = true;
            retStack.push("1");
            continue;
        }
        if (aValue + bValue + carry == 2) {
            carry = true;
            retStack.push("0");
            continue;
        }
        if (aValue + bValue + carry == 1) {
            carry = false;
            retStack.push("1");
            continue;
        }
        if (aValue + bValue + carry == 0) {
            carry = false;
            retStack.push("0");
            continue;
        }

    }

    while (aStack.length > 0) {
        aValue = Number(aStack.pop())
        if (aValue + carry == 2) {
            carry = true;
            retStack.push("0");
            continue;
        }
        if (aValue + carry == 1) {
            carry = false;
            retStack.push("1");
            continue;
        }
        if (aValue + carry == 0) {
            carry = false;
            retStack.push("0");
            continue;
        }
    }


    while (bStack.length > 0) {
        bValue = Number(bStack.pop())
        if (bValue + carry == 2) {
            carry = true;
            retStack.push("0");
            continue;
        }
        if (bValue + carry == 1) {
            carry = false;
            retStack.push("1");
            continue;
        }
        if (bValue + carry == 0) {
            carry = false;
            retStack.push("0");
            continue;
        }
    }
    if (carry) {
        retStack.push("1");
    }
    while (retStack.length > 0) {
        ret += retStack.pop();
    }

    return ret
}

console.log(addBinaryStrings("1000", "111"))
console.log(addBinaryStrings("1111", "111"))
console.log(addBinaryStrings("1", "1"))


*/



/*

    



    const meanGroups = {};

    // Use a traditional loop to iterate through arrays
    for (let i = 0; i < arrays.length; i++) {
        const array = arrays[i];

        // Calculate the sum without reduce
        let sum = 0;
        for (let j = 0; j < array.length; j++) {
            sum += array[j];
        }

        // Calculate mean
        const mean = array.length > 0 ? sum / array.length : 0;

        // Group indices by mean
        if (!meanGroups[mean]) {
            meanGroups[mean] = [];
        }
        meanGroups[mean].push(i);
    }

    const result = Object.values(meanGroups)
        .map(group => group.sort((a, b) => a - b)) // Sort indices in each group
        .sort((a, b) => a[0] - b[0]); // Sort groups by their minimum index




        
*/




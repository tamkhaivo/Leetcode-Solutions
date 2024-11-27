/*
    Assessment 2024: 52 68 6F 6D 62 75 73 0D 0A
*/

module.exports = {
    isSmoothArray: isSmoothArray,
    isPrimeDivisibleRTuples: isPrimeDivisibleRTuples,
    findLongestSubsequence, findLongestSubsequence
};

/*

    Given an int array. check to see if the array is smooth.
    aka the distance between the values are no more than 1;

    
    arr = [1, 2, 3, 4, 4, 3, 1]
    solution = False

    arr = [1, 2, 3, 4, 4, 3, 2]
    solution = True


    
*/

function isSmoothArray(intArray) {
    if (intArray.length < 2) {
        return true;
    }
    let number1, number2;

    for (let x = 1; x < intArray.length; x++){
        number1 = intArray[x - 1];
        number2 = intArray[x];
        abs = Math.abs(number1 - number2);
        if (abs > 1) {
            return false;
        }
    }
    return true;
}


/*
    To see if a number is divisiable by 3, add up the digits of its decimal notation and check if its divisible by 3.
    To see if see if a number is divisiable by 11, split the digit into pairs (from right to left) and add up the corresponding numbers, to check if its divisiabl by 11;

    for any prime P (except 2 and 5) there exists an integer R that such similiar divisibility test exists. 
    To check if the number is divisible by P, you need to split the integer into R-tuples. 
    add up to see if they are divisiable by P

    Given a prime p, find the minimal R that this divisiablity test is valid. 


*/

function isPrimeDivisibleRTuples(number) {
    
}





/*
    Given an IntArray find the longest subsequence present.

    arr: [6, 1, 5, 2, 9]
    out: [1, 5, 9]


*/



function findLongestSubsequence(intArray) {

    
}

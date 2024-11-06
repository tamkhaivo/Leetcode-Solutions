const palindrome = require('./validPalindrome');

test('[[0,2,0,3,1,0,1,3,2,1] expects 9', () => {
    let s = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];
    let target = 9;
    let res = palindrome.isValid(s)
    expect(res).toBe(target)
});

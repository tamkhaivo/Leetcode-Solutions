const palindrome = require('./validPalindrome');

test('Unoptimized: s = A man, a plan, a canal: Panama target = true', () => {
    let s = "A man, a plan, a canal: Panama"
    let target = true;
    let res = palindrome.isValid(s)
    expect(res).toBe(target)
});


test('Unoptimized: s = "race a car" target = false', () => {
    let s = "race a car"
    let target = false;
    let res = sum.isValid(s)
    expect(res).toBe(target)
});
test('Unoptimized: s = " " target = true', () => {
    let s = " "
    let target = true;
    let res = sum.isValid(s)
    expect(res).toBe(target)
});

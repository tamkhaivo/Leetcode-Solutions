const sum = require('./validParenthesis');

test('Unoptimized: s = (){}[] target = true', () => {
    let s = "(){}[]"
    let res = sum.isValid(s)
    expect(res).toBe(true)
});

test('Optimized: s = (){}[] target = true', () => {
    let s = "(){}[]"
    let res = sum.optimizedIsValid(s)
    expect(res).toBe(true)
});
const sum = require('./validParenthesis');

test('Unoptimized: s = (){}[] target = true', () => {
    let s = "(){}[]"
    let res = sum.isValid(s)
    expect(res).toBe(true)
});
test('Optimized: s = ( target = true', () => {
    let s = "("
    let res = sum.isValid(s)
    expect(res).toBe(false)
});
test('Unoptimized: s = "((((((((((((((((((((](()))))))))))))))))))))))" target = true', () => {
    let s = "((((((((((((((((((((](()))))))))))))))))))))))"
    let res = sum.isValid(s)
    expect(res).toBe(false)
});

test('Unoptimized: s = "((((((((((((((((((((((()))))))))))))))))))))))" target = true', () => {
    let s = "((((((((((((((((((((((()))))))))))))))))))))))"
    let res = sum.isValid(s)
    expect(res).toBe(true)
});
test('Unoptimized: s = "((((((((((((((())))))))))))))[[[[[[[[[[[[[[[[[[[[" target = false', () => {
    let s = "((((((((((((((())))))))))))))[[[[[[[[[[[[[[[[[[[["
    let res = sum.isValid(s)
    expect(res).toBe(false)
});
test('Unoptimized: s = "((((((((((((((())))))))))))))[[[[[[[[[[[[[[[[[[[[{" target = false', () => {
    let s = "((((((((((((((())))))))))))))[[[[[[[[[[[[[[[[[[[[{"
    let res = sum.isValid(s)
    expect(res).toBe(false)
});

test('Optimized: s = (){}[] target = true', () => {
    let s = "(){}[]"
    let res = sum.optimizedIsValid(s)
    expect(res).toBe(true)
});
test('Optimized: s = ( target = true', () => {
    let s = "("
    let res = sum.optimizedIsValid(s)
    expect(res).toBe(false)
});
test('Unoptimized: s = "((((((((((((((((((((](()))))))))))))))))))))))" target = true', () => {
    let s = "((((((((((((((((((((](()))))))))))))))))))))))"
    let res = sum.optimizedIsValid(s)
    expect(res).toBe(false)
});
test('Optimized: s = "((((((((((((((((((((((()))))))))))))))))))))))" target = true', () => {
    let s = "((((((((((((((((((((((()))))))))))))))))))))))"
    let res = sum.optimizedIsValid(s)
    expect(res).toBe(true)
});
test('Optimized: s = "((((((((((((((())))))))))))))[[[[[[[[[[[[[[[[[[[[" target = false', () => {
    let s = "((((((((((((((())))))))))))))[[[[[[[[[[[[[[[[[[[["
    let res = sum.optimizedIsValid(s)
    expect(res).toBe(false)
});
test('Unoptimized: s = "((((((((((((((())))))))))))))[[[[[[[[[[[[[[[[[[[[{" target = false', () => {
    let s = "((((((((((((((())))))))))))))[[[[[[[[[[[[[[[[[[[[{"
    let res = sum.optimizedIsValid(s)
    expect(res).toBe(false)
});
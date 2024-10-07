const containsDuplicate = require('./containsDuplicate');


test('Unoptimized: [1,2,3,4,5,6,1] expects true', () => {
    let numbers = [1,2,3,4,5,6,1];
    let res = containsDuplicate.containsDuplicate(numbers);
    expect(res).toBe(true);
});
test('Unoptimized: [1,2,3,4,5,6] expects true', () => {
    let numbers = [1,2,3,4,5,6];
    let res = containsDuplicate.containsDuplicate(numbers);
    expect(res).toBe(false);
});
test('Unoptimized: [] expects false', () => {
    let numbers = [];
    let res = containsDuplicate.containsDuplicate(numbers);
    expect(res).toBe(false);
});

test('Optimized:   [1,2,3,4,5,6,1] expects true', () => {
    let numbers = [1,2,3,4,5,6,1];
    let res = containsDuplicate.optimizedContainsDuplicate(numbers);
    expect(res).toBe(true);
});

test('Optimized:   [] expects false', () => {
    let numbers = [];
    let res = containsDuplicate.optimizedContainsDuplicate(numbers);
    expect(res).toBe(false);
});
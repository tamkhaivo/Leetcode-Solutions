const topKFrequent = require('./topKFrequent');

// Unoptimized
test('Unoptimized: [1,1,1,2,2,3] k = 2 - expects [1,2]', () => {
    let nums = [1,1,1,2,2,3];
    let k = 2;
    let res = topKFrequent.topKFrequent(nums, k);
    expect(res).toStrictEqual([1,2]);
});

test('Unoptimized: [1] k = 1 - expects [1]', () => {
    let nums = [1];
    let k = 1;
    let res = topKFrequent.topKFrequent(nums, k);
    expect(res).toStrictEqual([1]);
});



/*Optimized 
test('Optimized:   [1,1,1,2,2,3] k = 2 - expects [1,2]', () => {
    let nums = [1,1,1,2,2,3];
    let k = 2;
    let res = topKFrequent.optimizedTopKFrequent(nums, k);
    expect(res).toStrictEqual([1,2]);
});

test('Optimized:   [1] k = 1 - expects [1]', () => {
    let nums = [1];
    let k = 1;
    let res = topKFrequent.optimizedTopKFrequent(nums, k);
    expect(res).toStrictEqual([1]);
});


*/
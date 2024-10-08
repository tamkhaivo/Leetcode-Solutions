const encodeDecode = require('./encodeDecode');

// Unoptimized
test('Unoptimized: [1,1,1,2,2,3] k = 2 - expects [1,2]', () => {
    let url = "https://leetcode.com/problems/design-tinyurl";
    let res = encodeDecode.encodeDecode(url);
    expect(res).toStrictEqual(url);
});

const encodeDecode = require('./encodeDecode');

// Unoptimized
test('Unoptimized: problems/design-tinyurl - expects problems/design-tinyurl', () => {
    let url = "https://leetcode.com/problems/design-tinyurl";
    let res = encodeDecode.encodeDecode(url);
    expect(res).toStrictEqual(url);
});



test('Unoptimized: problems/design-tinyurl - expects problems/design-tinyurl', () => {
    let url = "https://leetcode.com/problems/design-tinyurl";
    let res = encodeDecode.optimizedEncodeDecode(url);
    expect(res).toStrictEqual(url);
});

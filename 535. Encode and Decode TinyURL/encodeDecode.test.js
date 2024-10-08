const encodeDecode = require('./encodeDecode');

// Unoptimized
test('Unoptimized: problems/design-tinyurl - expects problems/design-tinyurl', () => {
    let urlTokens = ["neet","code","love","you"];
    let res = encodeDecode.encodeDecode(urlTokens);
    expect(res).toStrictEqual(urlTokens);
});



test('Unoptimized: problems/design-tinyurl - expects problems/design-tinyurl', () => {
    let urlTokens = ["neet","code","love","you"];
    let res = encodeDecode.optimizedEncodeDecode(urlTokens);
    expect(res).toStrictEqual(urlTokens);
});

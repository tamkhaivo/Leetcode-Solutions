const assessment1 = require('./assessment1');

test('Unoptimized: s = "10010010" t = "11100000" target = "11111010', () => {
    let s = "10010010"
    let t = "11100000"
    let target = "11111010";
    let res = assessment1.maxValueXOR(s,t);
    expect(res).toBe(target);
});



const assessment1 = require('./assessment1');

test('Unoptimized: s = "10010010" t = "11100000" target = "11111010', () => {
    let s = "10010010"
    let t = "11100000"
    let target = "11111010";
    let res = assessment1.maxValueXOR(s,t);
    expect(res).toBe(target);
});
test('Unoptimized: s = "0000" t = "0000" target = "0000', () => {
    let s       = "0000"
    let t       = "0000"
    let target  = "0000";
    let res = assessment1.maxValueXOR(s,t);
    expect(res).toBe(target);
});
test('Unoptimized: s = "0000" t = "0000" target = "0000', () => {
    let s       = "0000"
    let t       = "1111"
    let target  = "1111";
    let res = assessment1.maxValueXOR(s,t);
    expect(res).toBe(target);
});

test('Unoptimized: s = "0000" t = "0000" target = "0000', () => {
    let s       = "1111"
    let t       = "1111"
    let target  = "0000";
    let res = assessment1.maxValueXOR(s,t);
    expect(res).toBe(target);
});

test('Unoptimized: s = "1011010101..." t = "1011010101..." target = "111111111...', () => {
    let s       = "1011010101010101010101010111011111101"
    let t       = "1011010101010101010101010111011111101"
    let target  = "1111111111111111111111111100100000010";
    let res = assessment1.maxValueXOR(s,t);
    expect(res).toBe(target);
});
test('Unoptimized: s = "1011010101..." t = "1011010101..." target = "111111111...', () => {
    let s       = "10110101010101010101010101110111111011011010101010101010101010111011111101101101010101010101010101011101111110110110101010101010101010101110111111011011010101010101010101010111011111101"
    let t       = "10110101010101010101010101110111111011011010101010101010101010111011111101101101010101010101010101011101111110110110101010101010101010101110111111011011010101010101010101010111011111101"
    let target  = "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111001010101010101010101010001000000100100101010101010101010101000100000010";
    let res = assessment1.maxValueXOR(s,t);
    expect(res).toBe(target);
});
test('Unoptimized: s = "1011010101..." t = "1011010101..." target = "111111111...', () => {
    let s       = "1011010101010101010101010111011111101101101010101010101010101011101111110110110101010101010101010101110111111011011010101010101010101010111011111101101101010101010101010101011101111110110110101010101010101010101110111111011011010101010101010101010111011111101101101010101010101010101011101111110110110101010101010101010101110111111011011010101010101010101010111011111101"
    let t       = "1011010101010101010101010111011111101101101010101010101010101011101111110110110101010101010101010101110111111011011010101010101010101010111011111101101101010101010101010101011101111110110110101010101010101010101110111111011011010101010101010101010111011111101101101010101010101010101011101111110110110101010101010101010101110111111011011010101010101010101010111011111101"
    let target  = "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110101010101010101010101000100000010010010101010101010101010100010000001001001010101010101010101010001000000100100101010101010101010101000100000010";
    let res = assessment1.maxValueXOR(s,t);
    expect(res).toBe(target);
});
test('Unoptimized: s = "1011010101..." t = "1011010101..." target = "111111111...', () => {
    let s       = "101101010101010101010101011101111110110101010101010"
    let t       = "101101010101010101010101011101111110110101010101010"
    let target  = "111111111111111111111111111111111101001010101010101";
    let res = assessment1.maxValueXOR(s,t);
    expect(res).toBe(target);
});

test('32BitOptimized: s = "10010010" t = "11100000" target = "11111010', () => {
    let s = "10010010"
    let t = "11100000"
    let target = "11111010";
    let res = assessment1.binary32BitMaxValueXOR(s,t);
    expect(res).toBe(target);
});

test('32BitOptimized: s = "0000" t = "1111" target = "0000', () => {
    let s       = "0000"
    let t       = "1111"
    let target  = "1111";
    let res = assessment1.binary32BitMaxValueXOR(s,t);
    expect(res).toBe(target);
});


test('32BitOptimized: s = "1011010101..." t = "1011010101..." target = "111111111...', () => {
    let s       = "1011010101010101010101010111011"
    let t       = "1011010101010101010101010111011"
    let target  = "1111111111111111111111111000100";
    let res = assessment1.binary32BitMaxValueXOR(s,t);
    expect(res).toBe(target);
});


test('32BitOptimized: s = "1011010101..." t = "1011010101..." target = "111111111...', () => {
    let s       = "000011111"
    let t       = "111110000"
    let target  = "111111110";
    let res = assessment1.binary32BitMaxValueXOR(s,t);
    expect(res).toBe(target);
});
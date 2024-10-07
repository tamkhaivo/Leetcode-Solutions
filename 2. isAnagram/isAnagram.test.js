const isAnagram = require('./isAnagram');

// Unoptimized
test('racecar vs carrace - expects true', () => {
    let s1 = "racecar";
    let s2 = "carrace";
    let res = isAnagram.isAnagram(s1, s2);
    expect(res).toBe(true);
});

test('jar vs jam - expects false', () => {
    let s1 = "jar";
    let s2 = "jam";
    let res = isAnagram.isAnagram(s1, s2);
    expect(res).toBe(false);
});

test('jar vs jam - expects false', () => {
    let s1 = "assert";
    let s2 = "mess";
    let res = isAnagram.isAnagram(s1, s2);
    expect(res).toBe(false);
});


// Optimized 
test('racecar vs carrace - expects true', () => {
    let s1 = "racecar";
    let s2 = "carrace";
    let res = isAnagram.optimizedIsAnagram(s1, s2);
    expect(res).toBe(true);
});

test('jar vs jam - expects false', () => {
    let s1 = "jar";
    let s2 = "jam";
    let res = isAnagram.optimizedIsAnagram(s1, s2);
    expect(res).toBe(false);
});

test('jar vs jam - expects false', () => {
    let s1 = "assert";
    let s2 = "mess";
    let res = isAnagram.optimizedIsAnagram(s1, s2);
    expect(res).toBe(false);
});
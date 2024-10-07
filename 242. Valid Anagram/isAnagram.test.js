const isAnagram = require('./isAnagram');

// Unoptimized
test('Unoptimized: racecar vs carrace - expects true', () => {
    let s1 = "racecar";
    let s2 = "carrace";
    let res = isAnagram.isAnagram(s1, s2);
    expect(res).toBe(true);
});
test('Unoptimized: jar vs jam - expects false', () => {
    let s1 = "jar";
    let s2 = "jam";
    let res = isAnagram.isAnagram(s1, s2);
    expect(res).toBe(false);
});
test('Unoptimized: aa vs bb - expects false', () => {
    let s1 = "aa";
    let s2 = "bb";
    let res = isAnagram.isAnagram(s1, s2);
    expect(res).toBe(false);
});
test('Unoptimized: ab vs ass - expects false', () => {
    let s1 = "ab";
    let s2 = "ass";
    let res = isAnagram.isAnagram(s1, s2);
    expect(res).toBe(false);
});
test('Unoptimized: ultimate vs mutilate - expects true', () => {
    let s1 = "ultimate";
    let s2 = "mutilate";
    let res = isAnagram.isAnagram(s1, s2);
    expect(res).toBe(true);
});

test('Unoptimized: Ultimate vs Mutilate - expects true', () => {
    let s1 = "Ultimate";
    let s2 = "Mutilate";
    let res = isAnagram.isAnagram(s1, s2);
    expect(res).toBe(true);
});
test('Unoptimized: William Shakespeare vs I am a weakish speller - expects true', () => {
    let s1 = "William Shakespeare";
    let s2 = "I am a weakish speller";
    let res = isAnagram.isAnagram(s1, s2);
    expect(res).toBe(true);
});


test('Optimzied:   ultimate vs mutilate - expects true', () => {
    let s1 = "ultimate";
    let s2 = "mutilate";
    let res = isAnagram.optimizedIsAnagram(s1, s2);
    expect(res).toBe(true);
});
test('Optimzied:   racecar vs carrace - expects true', () => {
    let s1 = "racecar";
    let s2 = "carrace";
    let res = isAnagram.optimizedIsAnagram(s1, s2);
    expect(res).toBe(true);
});
test('Optimzied:   jar vs jam - expects false', () => {
    let s1 = "jar";
    let s2 = "jam";
    let res = isAnagram.optimizedIsAnagram(s1, s2);
    expect(res).toBe(false);
});
test('Optimzied:   aa vs bb - expects false', () => {
    let s1 = "aa";
    let s2 = "bb";
    let res = isAnagram.optimizedIsAnagram(s1, s2);
    expect(res).toBe(false);
});
test('Optimzied:   ab vs ass - expects false', () => {
    let s1 = "ab";
    let s2 = "ass";
    let res = isAnagram.optimizedIsAnagram(s1, s2);
    expect(res).toBe(false);
});

test('Optimzied:   Ultimate vs Mutilate - expects true', () => {
    let s1 = "Ultimate";
    let s2 = "Mutilate";
    let res = isAnagram.optimizedIsAnagram(s1, s2);
    expect(res).toBe(true);
});
test('Optimzied:   William Shakespeare vs I am a weakish speller - expects true', () => {
    let s1 = "William Shakespeare";
    let s2 = "I am a weakish speller";
    let res = isAnagram.optimizedIsAnagram(s1, s2);
    expect(res).toBe(true);
});
test('Optimzied:   xx vs x - expects false', () => {
    let s1 = "xx";
    let s2 = "x";
    let res = isAnagram.optimizedIsAnagram(s1, s2);
    expect(res).toBe(false);
});

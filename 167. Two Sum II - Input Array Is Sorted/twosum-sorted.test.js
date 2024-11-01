const sum = require('./twosum');

test('Unoptimized: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] target = 15', () => {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let target = 15;
    let res = sum.twoSum(nums, target);
    expect(nums[res[0]] + nums[res[1]] === target).toBe(true);
});
test('Unoptimized: [1]...........................  target = 15', () => {
    let nums = [-5,-3,0,2,4,6,8];
    let target = 5;
    let res = sum.twoSum(nums, target);
    expect(nums[res[0]] + nums[res[1]] === target).toBe(true);

});

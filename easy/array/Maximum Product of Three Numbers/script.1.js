/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [-4, -3, -2, -1, 60];

const maximumProduct = function (nums) {
    debugger
    nums.sort((a, b) => a - b);
    let max1 = nums[nums.length - 1];
    let max2 = nums[nums.length - 2];
    let max3 = nums[nums.length - 3];
    let min1 = nums[0];
    let min2 = nums[1];
    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};

console.log(maximumProduct(nums)); // 720


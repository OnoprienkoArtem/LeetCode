/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var nums = [1, 12, -5, -6, 50, 3];

var findMaxAverage = function (nums, k) {
    var sum = 0,
        max = 0;
    for (var i = 0; i < k; ++i) {
        sum += nums[i];
    }
    max = sum;

    for (var i = k; i < nums.length; ++i) {
        sum = sum - nums[i - k] + nums[i];
        max = Math.max(max, sum);
    }
    return max / k;
};


console.log(findMaxAverage(nums, 4)); //  12.75
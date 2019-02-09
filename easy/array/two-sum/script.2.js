/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (target - nums[i] == nums[j]) {
                return [i, j];
            }
        }
    }
};

twoSum([2, 7, 11, 15], 9); // [0, 1]
twoSum([1, 4, 3, 11], 15); // [1, 3]
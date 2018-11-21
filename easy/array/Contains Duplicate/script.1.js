/**
 * @param {number[]} nums
 * @return {boolean}
 */
var nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

var containsDuplicate = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

console.log(containsDuplicate(nums));
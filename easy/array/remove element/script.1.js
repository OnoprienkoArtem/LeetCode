/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var nums = [0, 1, 2, 2, 3, 0, 4, 2];

var removeElement = function (nums, val) {
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};


console.log(removeElement(nums, 2));
console.log(nums);
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    var temp, prev;
    for (var i = 0; i < k; i++) {
        prev = nums[nums.length - 1];
        for (var j = 0; j < nums.length; j++) {
            temp = nums[j];
            nums[j] = prev;
            prev = temp;
        }
    }
    return nums;
};

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(rotate(arr, 3)); // [5, 6, 7, 1, 2, 3, 4]
console.log(rotate(arr, 2)); // [6, 7, 1, 2, 3, 4, 5]
console.log(rotate(arr, 1)); // [7, 1, 2, 3, 4, 5, 6]

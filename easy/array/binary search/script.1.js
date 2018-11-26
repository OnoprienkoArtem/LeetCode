/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var nums = [-1, 0, 3, 5, 9, 12];

var search = function (nums, target) {
    var low = 0;
    var high = nums.length - 1;

    while (low <= high) {
        var middle = Math.floor(low + (high - low) / 2);

        if (target < nums[middle]) {
            high = middle - 1;
        } else if (target > nums[middle]) {
            low = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
};


console.log(search(nums, 9)); //  4
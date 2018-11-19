

var nums = [1, 3, 5, 6];

var searchInsert = function (nums, target) {


    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] > target) {
            return i;
        }
        if (target === 0) {
            return 0;
        }
    }
    return nums.length;
};

console.log(searchInsert(nums, 7));
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [5, 7, 7, 8, 8, 10];

var searchRange = function (nums, target) {
    var newArr = [-1, -1];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            newArr[0] = i;
            break;
        }
    }
    if (newArr[0] == -1) {
        return newArr
    }
    for (var j = nums.length - 1; j >= 0; j--) {
        if (nums[j] === target) {
            newArr[1] = j;
            break;
        }
    }
    
    return newArr;
};


console.log(searchRange(nums, 8));
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var nums = [2, 3, 1, 1, 4];

var canJump = function (nums) {
    var currentStep = nums.length - 1;
    var i = 1;
    while (currentStep - i >= 0) {
        if (nums[currentStep - i] >= i) {
            currentStep = currentStep - i;
            i = 1;
        } else {
            i++;
        }
    }
    if (currentStep === 0) {
        return true;
    }
    return false
};


console.log(canJump(nums));
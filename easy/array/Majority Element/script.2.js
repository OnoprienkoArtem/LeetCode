/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [2, 2, 1, 1, 1, 2, 2];

var majorityElement = function (nums) {  
    debugger
    const counter = {};
    for (num of nums) {
        if (counter[num]) {
            counter[num] = counter[num] + 1;
        } else {
            counter[num] = 1;
        }
        if (counter[num] > nums.length / 2) return num;
    }
};

console.log(majorityElement(nums));
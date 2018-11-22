/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [2,2,1,1,1,2,2];

var majorityElement = function (nums) {    
    var hash = {};
    for (let num of nums) {
        if(hash[num]) {
            hash[num] = hash[num] + 1;
        } else {
            hash[num] = 1;
        }
        if (hash[num] > nums.length / 2) {
            return num;
        }
    }
};

console.log(majorityElement(nums));
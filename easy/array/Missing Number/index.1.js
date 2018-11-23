/**
* @param {number[]} nums
* @return {number}
*/
var missingNumber = function(nums) {
    var sum = 0;
    var expectedSum = nums.length;
    for (var i = 0; i < nums.length; i++) { 
        sum +=nums[i]; 
        expectedSum +=i; 
    } 
    return expectedSum - sum; 
};
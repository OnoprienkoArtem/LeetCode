
var nums = [1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {  

    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[j - 1]) {
            i++;
            nums[i] = nums[j];                
        }
    }        
    return i + 1;
};

removeDuplicates(nums);

removeDuplicates([1, 1, 2]);
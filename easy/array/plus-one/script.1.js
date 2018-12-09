// Given a non - empty array of digits representing a non - negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, 
// and each element in the array contain a single digit.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        var sum = digits[i] + 1;
        if (sum <= 9) {
            digits[i] = sum;
            return digits;
        } else {
            if (i == 0) {
                digits[i] = 10;
            } else {
                digits[i] = 0;
            }
        }
    }
    if (digits[0] == 10) {
        var addition = [digits.length + 1];
        addition[0] = 1;
        addition[1] = 0;
        for (var i = 1; i < digits.length; i++) {
            addition[i + 1] = digits[i];
        }
        return addition;
    }
    return digits;
};


console.log(plusOne([9, 9])); //[1, 0, 0]
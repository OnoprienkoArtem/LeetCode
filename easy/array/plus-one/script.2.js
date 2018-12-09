/**
 * @param {number[]} digits
 * @return {number[]}
 */


var plusOne = function (digits) {      
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    if (digits[0] === 0) digits.unshift(1)

    return digits
};


console.log(plusOne([1, 2, 3])); //[1, 0, 0]

console.log(plusOne([9, 9])); //[1, 0, 0]
/**
 * @param {number[]} A
 * @return {number[]}
 */
var nums = [4, 2, 5, 7];

var sortArrayByParityII = function (A) {
    var arr = [A.length],
        odd = 1,
        even = 0;

    for (var i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            arr[even] = A[i];
            even += 2;
        } else {
            arr[odd] = A[i];
            odd += 2;
        }
    }
    return arr;
};



console.log(sortArrayByParityII(nums));
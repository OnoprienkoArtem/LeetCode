/**
 * @param {number[]} A
 * @return {number[]}
 */
const nums = [3, 1, 2, 4];

function sortArrayByParity(nums) {
    let even = nums.filter(a => a % 2 === 0);
    let odd = nums.filter(a => a % 2 === 1);
    return even.concat(odd);
};

console.log(sortArrayByParity(nums)); // [2, 4, 3, 1]
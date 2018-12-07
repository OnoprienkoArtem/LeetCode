/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];

var merge = function (nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    var nums = nums1.concat(nums2);
    return nums.sort();
};

console.log(merge(nums1, 3, nums2, 3));
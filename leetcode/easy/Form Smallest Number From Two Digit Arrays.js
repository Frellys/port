// Given two arrays of unique digits nums1 and nums2,
// return the smallest number that contains at least one digit from each array.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
    let ret = nums1.sort((a, b) => a - b).find(n => nums2.includes(n));
    if (!ret) {
        ret = +Array.from(arguments).map(arr => {
            return Math.min.apply(null, arr);
        }).sort((a, b) => a - b).join('');
    }
    return ret;
};
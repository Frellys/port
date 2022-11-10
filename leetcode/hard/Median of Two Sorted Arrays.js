// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = Array.from(arguments).reduce((acc, cur) => {
        return acc.concat(cur);
    }, []).sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    return (arr.length % 2) ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};
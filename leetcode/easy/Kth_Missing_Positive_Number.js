// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Find the kth positive integer that is missing from this array.

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let num = 1;
    while (k > 0) {
        if (!arr.includes(num)) k--;
        num++;
    }
    return (num - 1);
};
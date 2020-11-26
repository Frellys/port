// Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.
// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where | arr1[i] - arr2[j] | <= d.

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    let ret = 0;
    arr1.forEach(function (el) {
        let flag = true;
        for (let i = 0; i < arr2.length; i++) {
            if (Math.abs(el - arr2[i]) <= d) {
                flag = false;
                break;
            }
        }
        if (flag) ret++;
    });
    return ret;
};
// You are given a positive integer num consisting of exactly four digits.
// Split num into two new integers new1 and new2 by using the digits found in num.
// Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.
// - For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3.
//   Some of the possible pairs[new1, new2] are[22, 93], [23, 92], [223, 9] and[2, 329].
// Return the minimum possible sum of new1 and new2.

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    let swap = function (arr, i1, i2) {
        let t = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = t;
    };
    let permute = function (arr, f) {
        let c = new Array(arr.length).fill(0);
        f(arr);
        let i = 0;
        while (i < arr.length) {
            if (c[i] < i) {
                swap(arr, (i % 2) ? c[i] : 0, i);
                f(arr);
                c[i]++;
                i = 0;
            }
            else {
                c[i] = 0;
                i++;
            }
        }
    };
    let min = Number.MAX_SAFE_INTEGER;
    permute(num.toString().split(''), function (arr) {
        let cur = Math.min.apply(null, [
            parseInt(arr[0]) + parseInt(arr[1] + arr[2] + arr[3]),
            parseInt(arr[0] + arr[1]) + parseInt(arr[2] + arr[3]),
            parseInt(arr[0] + arr[1] + arr[2]) + parseInt(arr[3])
        ]);
        if (min > cur) {
            min = cur;
        }
    });
    return min;
};
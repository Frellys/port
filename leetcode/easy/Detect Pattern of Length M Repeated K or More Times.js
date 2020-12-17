// Given an array of positive integers arr, find a pattern of length m that is repeated k or more times.
// A pattern is a subarray(consecutive sub - sequence) that consists of one or more values, repeated multiple times consecutively without overlapping.
// A pattern is defined by its length and the number of repetitions.
// Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.

/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
    let border = arr.length - (m * k);
    let flag = false;
    check: for (let i = 0; i <= border; i++) {
        for (let j = i; j < i + m; j++) {
            let cnt = (k - 1);
            while (cnt > 0) {
                if (arr[j + (cnt * m)] != arr[j]) continue check;
                cnt--;
            }
        }
        flag = true;
        break;
    }
    return flag;
};
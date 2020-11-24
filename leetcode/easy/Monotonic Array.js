// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array A is monotone increasing if for all i <= j, A[i] <= A[j].An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
// Return true if and only if the given array A is monotonic

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    let ret = true;
    if (A.length > 1) {
        let asc;
        for (let i = 1; i < A.length; i++) {
            if (A[i] != A[i - 1]) {
                asc = (A[i] > A[i - 1]);
            }
        }
        for (let i = 1; i < A.length; i++) {
            if (asc) {
                if (A[i] < A[i - 1]) {
                    ret = false;
                    break;
                }
            }
            else {
                if (A[i] > A[i - 1]) {
                    ret = false;
                    break;
                }
            }
        }
    }
    return ret;
};
// Given an array A of positive lengths, return the largest perimeter of a triangle with non - zero area, formed from 3 of these lengths.
// If it is impossible to form any triangle of non - zero area, return 0.

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
    let max = 0;
    A.sort(function (a, b) {
        return b - a;
    });
    outer: for (let i = 0; i < A.length - 2; i++) {
        for (let j = i + 1; j < A.length - 1; j++) {
            for (let k = j + 1; k < A.length; k++) {
                if (A[i] + A[j] > A[k] &&
                    A[j] + A[k] > A[i] &&
                    A[k] + A[i] > A[j] &&
                    A[i] + A[j] + A[k] > max) {
                    max = A[i] + A[j] + A[k];
                }
                if (max != 0) break outer;
            }
        }
    }
    return max;
};
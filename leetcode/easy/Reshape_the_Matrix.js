// In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.
// You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
// The reshaped matrix need to be filled with all the elements of the original matrix in the same row - traversing order as they were.
// If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    let ret = [];
    if (nums.length * nums[0].length != r * c) return nums;
    if (r == 1) return [nums.flat()];
    if (c == 1) return nums.flat().map(x => [x]);
    let arr = nums.flat();
    for (let row = 0; row < r; row++) {
        let cur = [];
        for (let col = 0; col < c; col++) {
            cur.push(arr[row * c + col]);
        }
        ret.push(cur);
    }
    return ret;
};
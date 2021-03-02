// You have n boxes.You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
// In one operation, you can move one ball from a box to an adjacent box.Box i is adjacent to box j if abs(i - j) == 1.
// Note that after doing so, there may be more than one ball in some boxes.
// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.
// Each answer[i] is calculated considering the initial state of the boxes.

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    return boxes.split('').map(function (b, bdx, arr) {
        let cur = 0;
        arr.forEach(function (el, edx) {
            if (el == '1') cur += Math.abs(edx - bdx);
        });
        return cur;
    });
};
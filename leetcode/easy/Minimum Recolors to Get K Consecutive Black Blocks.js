// You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block.
// The characters 'W' and 'B' denote the colors white and black, respectively.
// You are also given an integer k, which is the desired number of consecutive black blocks.
// In one operation, you can recolor a white block such that it becomes a black block.
// Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let arr = blocks.split('');
    let cur = arr.splice(0, k);
    let min = cur.filter(el => el == 'W').length;
    while (arr.length) {
        cur.shift();
        cur.push(arr.shift());
        let cmin = cur.filter(el => el == 'W').length;
        if (min > cmin) {
            min = cmin;
        }
    }
    return min;
};
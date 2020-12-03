// Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string.
// If there are less than k characters left, reverse all of them.
// If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i += (k * 2)) {
        let cur = [];
        for (let j = i; j < (k + i) && j < arr.length; j++) {
            cur.push(arr[j]);
        }
        cur.reverse();
        for (let j = i; j < (k + i) && j < arr.length; j++) {
            arr[j] = cur.shift();
        }
    }
    return arr.join('');
};
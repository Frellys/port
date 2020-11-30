// Given an array of non - negative integers arr, you are initially positioned at start index of the array.
// When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.
// Notice that you can not jump outside of the array at any time.

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
    let prev = [start];
    let zeroFound = false;
    let cnt = 0;
    while (!zeroFound && cnt <= arr.length) {
        let cur = [];
        prev.forEach(function (pos) {
            let cur_L = pos - arr[pos];
            if (cur_L >= 0) {
                cur.push(cur_L);
                if (arr[cur_L] == 0) zeroFound = true;
            }
            let cur_R = pos + arr[pos];
            if (cur_R < arr.length) {
                cur.push(cur_R);
                if (arr[cur_R] == 0) zeroFound = true;
            }
        });
        if (cur.length == 0) break;
        prev = cur;
        cnt++;
    }
    return zeroFound;
};
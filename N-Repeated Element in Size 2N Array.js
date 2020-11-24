// In a array A of size 2N, there are N + 1 unique elements, and exactly one of these elements is repeated N times.
// Return the element repeated N times.

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    let N = A.length / 2;
    let freq = {};
    A.forEach(function (el) {
        let key = el.toString();
        if (key in freq) {
            freq[key]++;
        }
        else {
            freq[key] = 1;
        }
    });
    let ret;
    Object.keys(freq).forEach(function (key) {
        if (freq[key] == N) {
            ret = parseInt(key);
        }
    });
    return ret;
};
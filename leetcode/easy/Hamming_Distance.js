// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, calculate the Hamming distance.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let b1 = (x >>> 0).toString(2);
    let b2 = (y >>> 0).toString(2);
    while (b1.length < b2.length) b1 = '0' + b1;
    while (b1.length > b2.length) b2 = '0' + b2;
    let cnt = 0;
    for (let i = 0; i < b1.length; i++) {
        if (b1[i] != b2[i]) cnt++;
    }
    return cnt;
};
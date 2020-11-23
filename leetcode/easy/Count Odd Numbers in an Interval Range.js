/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    let interval = high - low;
    if (low % 2 != 0) interval++;
    if (high % 2 != 0) interval++;
    return (interval / 2);
};
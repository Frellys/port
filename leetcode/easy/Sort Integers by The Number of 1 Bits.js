// Given an integer array arr.You have to sort the integers in the array in ascending order by the number of 1's in their binary representation
// and in case of two or more integers have the same number of 1's you have to sort them in ascending order.
// Return the sorted array.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    arr.sort(function (a, b) { return a - b; });
    let bits = {};
    arr.forEach(function (num) {
        let cnt = num.toString(2).split('').filter(function (n) { return n == '1'; }).length.toString();
        if (cnt in bits) bits[cnt].push(num);
        else bits[cnt] = [num];
    });
    let ret = [];
    let keys = Object.keys(bits);
    keys.sort(function (a, b) { return parseInt(a) - parseInt(b); });
    keys.forEach(function (key) {
        bits[key].forEach(function (num) { ret.push(num); });
    });
    return ret;
};
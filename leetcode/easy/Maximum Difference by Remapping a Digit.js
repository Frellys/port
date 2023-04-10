// You are given an integer num.
// You know that Danny Mittal will sneakily remap one of the 10 possible digits (0 to 9) to another digit.
// Return the difference between the maximum and minimum values Danny can make by remapping exactly one digit in num.

/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
    let str = num.toString();
    let arr = str.split('');
    let fMax = new RegExp(arr.find(ch => ch > '0') || '9', 'g');
    let fMin = new RegExp(arr.find(ch => ch < '9') || '0', 'g');
    let max = +str.replace(fMin, '9');
    let min = +str.replace(fMax, '0');
    return max - min;
};
// You are given a positive integer num.
// You may swap any two digits of num that have the same parity(i.e.both odd digits or both even digits).
// Return the largest possible value of num after any number of swaps.

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    let nums = { even: [], odd: [] };
    num = num.toString().split('').map(n => {
        let t = (n % 2) ? 'odd' : 'even';
        nums[t].push(n);
        return t;
    });
    Object.keys(nums).forEach(k => {
        nums[k] = nums[k].sort((a, b) => b - a);
    });
    return num.map(k => nums[k].shift()).join('');
};
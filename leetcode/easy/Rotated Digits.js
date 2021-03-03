// X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.
// Each digit must be rotated - we cannot choose to leave it alone.
// A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves;
// 2 and 5 rotate to each other(on this case they are rotated in a different direction, in other words 2 or 5 gets mirrored);
// 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.
// Now given a positive number N, how many numbers X from 1 to N are good ?

/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
    let ret = 0;
    for (let i = 1; i <= N; i++) {
        let nums = i.toString().split('');
        if (nums.includes('3') || nums.includes('4') || nums.includes('7')) continue;
        if (nums.includes('2') || nums.includes('5') || nums.includes('6') || nums.includes('9')) ret++;
    }
    return ret;
};
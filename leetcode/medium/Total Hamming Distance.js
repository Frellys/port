// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Now your job is to find the total Hamming distance between all pairs of the given numbers.

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    let ret = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let h = nums[i] ^ nums[j];
            while (h) {
                ret++;
                h &= (h - 1);
            }
        }
    }
    return ret;
};
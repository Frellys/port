// Given two integers L and R, find the count of numbers in the range[L, R](inclusive) having a prime number of set bits in their binary representation.
// (Recall that the number of set bits an integer has is the number of 1s present when written in binary.
// For example, 21 written in binary is 10101 which has 3 set bits.
// Also, 1 is not a prime.)

/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
    let ret = 0;
    for (let i = L; i <= R; i++) {
        let set = 0;
        i.toString(2).split('').forEach(function (el) {
            if (el == '1') set++;
        });
        if (set > 1) {
            let flag = true;
            for (let j = 2; j < set; j++) {
                if (set % j == 0) {
                    flag = false;
                    break;
                }
            }
            if (flag) ret++;
        }
    }
    return ret;
};
// In a list of songs, the i - th song has a duration of time[i] seconds.
// Return the number of pairs of songs for which their total duration in seconds is divisible by 60.
// Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    let ret = 0;
    for (let i = 0; i < time.length - 1; i++) {
        for (j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 == 0) ret++;
        }
    }
    return ret;
};
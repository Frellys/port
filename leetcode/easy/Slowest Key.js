// A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time.
// You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence,
// and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released.
// Both arrays are 0 - indexed.The 0th key was pressed at the time 0, and every subsequent key was pressed at the exact time the previous key was released.
// The tester wants to know the key of the keypress that had the longest duration.
// The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0].
// Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration.
// Return the key of the keypress that had the longest duration.If there are multiple such keypresses, return the lexicographically largest key of the keypresses.

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    let dur = {};
    let max = releaseTimes[0];
    releaseTimes.forEach(function (time, tdx) {
        let cur = (tdx == 0) ? time : time - releaseTimes[tdx - 1];
        if (max < cur) max = cur;
        let key = keysPressed[tdx];
        if (key in dur) {
            if (dur[key] < cur) dur[key] = cur;
        }
        else {
            dur[key] = cur;
        }
    });
    let ret = [];
    Object.keys(dur).forEach(function (key) {
        if (dur[key] == max) ret.push(key);
    });
    ret.sort();
    return ret.pop();
};
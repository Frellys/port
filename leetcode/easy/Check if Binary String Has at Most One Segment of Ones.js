// Given a binary string s without leading zeros, return true if s contains at most one contiguous segment of ones.
// Otherwise, return false.

/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
    return s.split('0').filter(Boolean).length == 1;
};
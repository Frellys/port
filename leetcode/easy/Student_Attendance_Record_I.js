// You are given a string representing an attendance record for a student.The record only contains the following three characters:
// - 'A' : Absent.
// - 'L' : Late.
// - 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).
// You need to return whether the student could be rewarded according to his attendance record.

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let a_cnt = 0;
    let ret = true;
    s.split('').forEach(function (char, idx, arr) {
        if (ret) {
            let ch = char.toUpperCase();
            if (ch == 'A') a_cnt++;
            if (a_cnt == 2) {
                ret = false;
            }
            else {
                if (ch == 'L') {
                    if (arr[idx + 1] && arr[idx + 1] == 'L' && arr[idx + 2] && arr[idx + 2] == 'L') ret = false;
                }
            }
        }
    });
    return ret;
};
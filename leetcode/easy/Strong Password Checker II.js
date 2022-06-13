// A password is said to be strong if it satisfies all the following criteria:
// - It has at least 8 characters.
// - It contains at least one lowercase letter.
// - It contains at least one uppercase letter.
// - It contains at least one digit.
// - It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// - It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password. Otherwise, return false.

/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
    const alphabet = {
        lower: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        upper: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''),
        digit: '0123456789'.split(''),
        special: '!@#$%^&*()-+'.split('')
    };
    const tests = [
        (str) => {
            return str.length >= 8;
        },
        (str) => {
            return Object.values(alphabet).every(v => str.split('').some(c => v.includes(c)));
        },
        (str) => {
            return str.split('').every((c, cdx, arr) => c != arr[cdx - 1]);
        }
    ];
    return tests.every(test => test(password));
};
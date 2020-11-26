// Write a program that outputs the string representation of numbers from 1 to n.
// But for multiples of three it should output "Fizz" instead of the number and for the multiples of five output "Buzz".
// For numbers which are multiples of both three and five output "FizzBuzz".

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let ret = [];
    for (let i = 1; i < n + 1; i++) {
        let cur = '';
        let flag = true;
        if (i % 3 == 0) {
            cur += 'Fizz';
            flag = false;
        }
        if (i % 5 == 0) {
            cur += 'Buzz';
            flag = false;
        }
        if (flag) {
            cur = i.toString();
        }
        ret.push(cur);
    }
    return ret;
};
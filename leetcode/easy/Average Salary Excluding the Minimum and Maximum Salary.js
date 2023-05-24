// Given an array of unique integers salary where salary[i] is the salary of the employee i.
// Return the average salary of employees excluding the minimum and maximum salary.

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let len = salary.length - 2;
    let sum = salary.sort((a, b) => a - b).splice(1, len).reduce((acc, cur) => acc + cur, 0);
    return sum / len;
};
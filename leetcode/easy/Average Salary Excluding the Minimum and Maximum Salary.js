// Given an array of unique integers salary where salary[i] is the salary of the employee i.
// Return the average salary of employees excluding the minimum and maximum salary.

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let max = salary[0];
    let min = salary[0];
    let sum = 0;
    salary.forEach(function (el) {
        if (max < el) max = el;
        if (min > el) min = el;
        sum += el;
    });
    sum = sum - max - min;
    return (sum / (salary.length - 2));
};
// You have a data structure of employee information, which includes the employee's unique id, their importance value, and their direct subordinates' id.
// You are given an array of employees employees where:
// - employees[i].id is the ID of the ith employee.
// - employees[i].importance is the importance value of the ith employee.
// - employees[i].subordinates is a list of the IDs of the subordinates of the ith employee.
// Given an integer id that represents the ID of an employee, return the total importance value of this employee and all their subordinates.

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    let ret = 0;
    function traverse(employee) {
        ret += employee.importance;
        employee.subordinates.forEach(function (sdx) {
            traverse(employees.find(e => e.id == sdx));
        });
    };
    traverse(employees.find(e => e.id == id));
    return ret;
};
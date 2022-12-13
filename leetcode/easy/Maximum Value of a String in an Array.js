// The value of an alphanumeric string can be defined as:
// - The numeric representation of the string in base 10, if it comprises of digits only.
// - The length of the string, otherwise.
// Given an array strs of alphanumeric strings,
// return the maximum value of any string in strs.

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    return Math.max.apply(null, strs.map(el => {
        return (/^\d+$/.test(el)) ? parseInt(el) : el.length;
    }));
};
// Write a function to find the longest common prefix string amongst an array of strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return '';
    let shortest_string = strs[0];
    strs.forEach(function (el) {
        if (shortest_string.length > el.length) shortest_string = el;
    });
    let prefix = [];
    for (let i = 0; i < shortest_string.split('').length; i++) {
        let contains = true;
        strs.forEach(function (el) {
            if (el[i] != shortest_string[i]) contains = false;
        });
        if (contains) {
            prefix.push(shortest_string[i]);
        }
        else {
            break;
        }
    }
    return prefix.join('');
};
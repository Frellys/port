// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
// You need to help them find out their common interest with the least list index sum.
// If there is a choice tie between answers, output all of them with no order requirement.You could assume there always exists an answer.

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let seen = {};
    list1.filter(function (el) { return list2.includes(el); }).forEach(function (key) {
        seen[key] = list1.indexOf(key) + list2.indexOf(key);
    });
    let min = Math.min.apply(null, Object.values(seen));
    return Object.keys(seen).filter(function (key) { return seen[key] == min; });
};
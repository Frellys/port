// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
// Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let freq = {};
    arr1.sort(function (a, b) { return a - b; });
    arr1.forEach(function (el) {
        let key = el.toString();
        freq[key] = (key in freq) ? freq[key] + 1 : 1;
    });
    let ret = [];
    arr2.forEach(function (el) {
        let key = el.toString();
        while (freq[key] != 0) {
            ret.push(el);
            freq[key]--;
        }
    });
    arr1.forEach(function (el) {
        if (!ret.includes(el)) {
            let key = el.toString();
            while (freq[key] != 0) {
                ret.push(el);
                freq[key]--;
            }
        }
    });
    return ret;
};
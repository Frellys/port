// Given an array of strings products and a string searchWord.We want to design a system that suggests at most three product names from products after each character of searchWord is typed.
// Suggested products should have common prefix with the searchWord.If there are more than three products with a common prefix return the three lexicographically minimums products.
// Return list of lists of the suggested products after each character of searchWord is typed. 

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    products.sort();
    let ret = [];
    let word = '';
    for (let ch of searchWord) {
        word += ch;
        products = products.map(function (el) { if (el.indexOf(word) === 0) return el; }).filter(Boolean);
        let cnt = 0;
        ret.push(products.filter(function () { cnt++; return (cnt <= 3); }));
    }
    return ret;
};
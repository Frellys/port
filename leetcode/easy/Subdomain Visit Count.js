// A website domain like "discuss.leetcode.com" consists of various subdomains.At the top level, we have "com", at the next level, we have "leetcode.com",
//and at the lowest level, "discuss.leetcode.com".
// When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.
// Now, call a "count-paired domain" to be a count(representing the number of visits this domain received), followed by a space, followed by the address.
// An example of a count - paired domain might be "9001 discuss.leetcode.com".
// We are given a list cpdomains of count - paired domains.
// We would like a list of count - paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let domains = [{}, {}, {}];
    cpdomains.forEach(function (cpd) {
        let [cnt, str] = cpd.split(' ');
        cnt = parseInt(cnt);
        str.split('.').forEach(function (el, i, arr) {
            let d = arr.filter(function (f, idx) { return (idx >= i) }).join('.');
            let idx = arr.length - (i + 1);
            domains[idx][d] = (d in domains[idx]) ? domains[idx][d] + cnt : cnt;
        });
    });
    let ret = [];
    domains.forEach(function (l) {
        Object.keys(l).forEach(function (d) {
            ret.push(l[d] + ' ' + d);
        });
    });
    return ret;
};
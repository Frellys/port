// You are given two 2D integer arrays, items1 and items2, representing two sets of items.
// Each array items has the following properties:
// - items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item.
// - The value of each item in items is unique.
// Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.
// Note: ret should be returned in ascending order by value.

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
    return Object.entries(Array.from(arguments).reduce((acc, cur) => {
        cur.forEach(([v, w]) => {
            if (!(v in acc)) {
                acc[v] = 0;
            }
            acc[v] += w;
        });
        return acc;
    }, {}));
};
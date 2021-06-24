// Implement the RandomizedSet class:
// - RandomizedSet() Initializes the RandomizedSet object.
// - bool insert(int val) Inserts an item val into the set if not present.
//   Returns true if the item was not present, false otherwise.
// - bool remove(int val) Removes an item val from the set if present.
//   Returns true if the item was present, false otherwise.
// - int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called).
//   Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.set = new Set();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    let tmp = this.set.size;
    this.set.add(val);
    return (tmp != this.set.size);
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    let tmp = this.set.size;
    this.set.delete(val);
    return (tmp != this.set.size);
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return Array.from(this.set)[Math.floor(Math.random() * this.set.size)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
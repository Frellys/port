// Design a HashSet without using any built -in hash table libraries.
// Implement MyHashSet class:
// - void add(key) Inserts the value key into the HashSet.
// - bool contains(key) Returns whether the value key exists in the HashSet or not.
// - void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this.set = new Set();
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this.set.add(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    this.set.delete(key);
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return this.set.has(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
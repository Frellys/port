// Design a HashSet without using any built -in hash table libraries.
// Implement MyHashSet class:
// - void add(key) Inserts the value key into the HashSet.
// - bool contains(key) Returns whether the value key exists in the HashSet or not.
// - void remove(key) Removes the value key in the HashSet.If key does not exist in the HashSet, do nothing.

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this.array = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    if (this.array.includes(key) == false) {
        this.array.push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    if (this.array.includes(key)) {
        this.array.splice(this.array.indexOf(key), 1);
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return this.array.includes(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
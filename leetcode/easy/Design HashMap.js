// Design a HashMap without using any built -in hash table libraries.
// Implement the MyHashMap class:
// - MyHashMap() initializes the object with an empty map.
// - void put(int key, int value) inserts a(key, value) pair into the HashMap.If the key already exists in the map, update the corresponding value.
// - int get(int key) returns the value to which the specified key is mapped, or - 1 if this map contains no mapping for the key.
// - void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.map = {};
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    this.map[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    return (key in this.map) ? this.map[key] : -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    delete this.map[key];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
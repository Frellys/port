// There is a stream of n(idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string.
// No two pairs have the same id.
// Design a stream that returns the values in increasing order of their IDs by returning a chunk(list) of values after each insertion.
// The concatenation of all the chunks should result in a list of the sorted values.
// Implement the OrderedStream class:
// OrderedStream(int n) Constructs the stream to take n values.
// String[] insert(int idKey, String value) Inserts the pair(idKey, value) into the stream,
// then returns the largest possible chunk of currently inserted values that appear next in the order.

/**
 * @param {number} n
 */
var OrderedStream = function (n) {
    this.max = n;
    this.ptr = 1;
    this.map = new Map();
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
    this.map.set(idKey, value);
    let ret = [];
    while (this.map.has(this.ptr)) {
        ret.push(this.map.get(this.ptr));
        this.ptr++;
    }
    return ret;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
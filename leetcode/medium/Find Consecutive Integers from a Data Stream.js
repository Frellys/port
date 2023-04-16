// For a stream of integers, implement a data structure that checks if the last k integers parsed in the stream are equal to value.
// Implement the DataStream class:
// - DataStream(int value, int k) Initializes the object with an empty integer stream and the two integers value and k.
// - boolean consec(int num) Adds num to the stream of integers.
//   Returns true if the last k integers are equal to value, and false otherwise.
//   If there are less than k integers, the condition does not hold true, so returns false.

/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function (value, k) {
    this.val = value;
    this.len = k;
    this.cnt = 0;
};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function (num) {
    this.cnt = (this.val == num) ? this.cnt + 1 : 0;
    return this.cnt >= this.len;
};

/** 
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
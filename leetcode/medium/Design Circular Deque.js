// Design your implementation of the circular double - ended queue(deque).
// Implement the MyCircularDeque class:
// - MyCircularDeque(int k) Initializes the deque with a maximum size of k.
// - boolean insertFront() Adds an item at the front of Deque.Returns true if the operation is successful, or false otherwise.
// - boolean insertLast() Adds an item at the rear of Deque.Returns true if the operation is successful, or false otherwise.
// - boolean deleteFront() Deletes an item from the front of Deque.Returns true if the operation is successful, or false otherwise.
// - boolean deleteLast() Deletes an item from the rear of Deque.Returns true if the operation is successful, or false otherwise.
// - int getFront() Returns the front item from the Deque.Returns - 1 if the deque is empty.
// - int getRear() Returns the last item from Deque.Returns - 1 if the deque is empty.
// - boolean isEmpty() Returns true if the deque is empty, or false otherwise.
// - boolean isFull() Returns true if the deque is full, or false otherwise.

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.size = 0;
    this.max = k;
    this.data = [];
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    let flag;
    if (flag = this.size < this.max) {
        this.data.unshift(value);
        this.size++;
    }
    return flag;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    let flag;
    if (flag = this.size < this.max) {
        this.data.push(value);
        this.size++;
    }
    return flag;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    let flag;
    if (flag = !!this.size) {
        this.data.shift();
        this.size--;
    }
    return flag;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    let flag;
    if (flag = !!this.size) {
        this.data.pop();
        this.size--;
    }
    return flag;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    return (this.size) ? this.data[0] : -1;
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    return (this.size) ? this.data[this.size - 1] : -1;
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return (this.size == 0);
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return (this.size == this.max);
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// Given a singly linked list, return a random node's value from the linked list.
// Each node must have the same probability of being chosen.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
    this.head = head;
    this.vals = [];
    this.size = 0;
    while (head) {
        this.vals[this.size] = head.val;
        head = head.next;
        this.size++;
    }
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    return (this.size == 0) ? null : this.vals[Math.floor(Math.random() * this.size)];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// You are given two linked lists: list1 and list2 of sizes n and m respectively.
// Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let arr1 = [];
    let arr2 = [];
    while (list1) {
        arr1.push(list1.val);
        list1 = list1.next;
    }
    while (list2) {
        arr2.push(list2.val);
        list2 = list2.next;
    }
    arr1.splice(a, b - a + 1, arr2);
    arr1 = arr1.flat().map(function (el) {
        return new ListNode(el, null)
    });
    arr1.forEach(function (el, edx) {
        el.next = (arr1[edx + 1] == undefined) ? null : arr1[edx + 1];
    });
    return arr1[0];
};
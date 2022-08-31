// Leetcode problem 2: Add Two Numbers
// Problem Description: https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
 */

// better than 100% of javascript submissions. The fastest solution.

const addTwoNumbers = (l1, l2) => {
  let carry = 0; 
  let head = new ListNode();
  let curr = head;
  while (l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry; 
    carry = Math.floor(sum / 10); 
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry) { 
    curr.next = new ListNode(carry);
  }
  return head.next;
};

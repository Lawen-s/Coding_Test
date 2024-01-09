/**
 * https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/submissions/1141514240/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 풀이를 보고 이해
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
  if (head.next == null) return null;

let slow = head;
let fast = head;
let prevSlow = null;

while (fast && fast.next) {
 fast = fast.next.next;
 prevSlow = slow;
 slow = slow.next;
}

prevSlow.next = slow.next;
return head;
};


/**
 * 효율 좋은 코드
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
  if (!head?.next) {
      return null;
  }

  let slowNode = head;
  let fastNode = head.next;

  while (fastNode?.next?.next) {
      slowNode = slowNode.next;
      fastNode = fastNode.next.next;
  }

  slowNode.next = slowNode.next.next

  return head;
};
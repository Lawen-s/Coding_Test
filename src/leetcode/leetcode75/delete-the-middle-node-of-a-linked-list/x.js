/**
 * https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/submissions/1141514240/?envType=study-plan-v2&envId=leetcode-75
 * 24-11-11 - X
 * 24-03-23 - X
 * 24-01-09 - X
 */

/**
 * 24-11-11 - X
 */
var deleteMiddle = function (head) {
  if (!head?.next) {
    return null;
  }

  let slowNode = head;
  let fastNode = head.next;

  while (fastNode?.next?.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }

  slowNode.next = slowNode.next.next;

  return head;
};

/**
 * 24-03-23 - X
 * 풀이를 보고 이해(새로운 배열이나, 필터를 사용하면 안됨)
 */
var deleteMiddle = function (head) {
  let slow = (fast = head);
  let prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (!prev) return null;
  prev.next = slow.next;
  return head;
};

/**
 * 24-01-09 - X
 * 풀이를 보고 이해
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
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
var deleteMiddle = function (head) {
  if (!head?.next) {
    return null;
  }

  let slowNode = head;
  let fastNode = head.next;

  while (fastNode?.next?.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }

  slowNode.next = slowNode.next.next;

  return head;
};

// console.log(deleteMiddle([1,3,4,7,1,2,6]))
// console.log(deleteMiddle([1,2,3,4]))
// console.log(deleteMiddle([2,1]))

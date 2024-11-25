/**
 * https://leetcode.com/problems/reverse-linked-list/submissions/1108935057/?envType=study-plan-v2&envId=leetcode-75
 * 24-11-25 - X
 * 24-03-25 - X
 * 23-11-29 - X
 */

/**
 * 24-11-25 - X
 */
var reverseList = function (head) {
  if (head == null || head.next == null) return head;
  var res = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return res;
};

/**
 * 24-03-25 - X - 재귀함수로 문제를 해결하는 방식
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head == null || head.next == null) return head;
  var res = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return res;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 난이도 쉬움이라고 하지만 어렵다.
 * 재귀함수 or 반복문으로 해결해야하는데, reduce를 사용해도 통과가 안됐다.
 * 다른 사람이 푼 문제를 보고 해결
 * 참고 블로그(https://underdog11.tistory.com/entry/JavaScript-22-Generate-Parentheses-1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let current = head;
  let previous = null;
  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

console.log(reverseList([1, 2, 3, 4, 5]));
// console.log(reverseList([1,2]))
// console.log(reverseList([]))

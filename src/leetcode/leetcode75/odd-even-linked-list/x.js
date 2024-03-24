/**
 * https://leetcode.com/problems/odd-even-linked-list/submissions/1141525550/?envType=study-plan-v2&envId=leetcode-75
 * 24-03-24 - X
 * 24-01-09 - X
 */

/**
 * 24-03-24 - X
 * @param {*} head 
 * @returns 
 */
var oddEvenList = function(head) {
  if(head != null){
        
    let odd = head, even = head.next, evenHead = even;
    while(even && even.next != null){
        odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
    }
    odd.next = evenHead;
}
return head;
};

/**
 * 풀이보고 이해
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
var oddEvenList = function(head) {
  if (!head) return head;

var odd = head;
var even = head.next;
while (odd.next && odd.next.next) {
  var tmp = odd.next;
  odd.next = odd.next.next;
  odd = odd.next;
  tmp.next = odd.next;
}
odd.next = even;
return head;
};


/**
 * 효율이 좋은 코드
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
var oddEvenList = function(head) {
  if (!head?.next) {
      return head;
  }
  let odd = head;
  let even = head.next
  let evenHead = even;

  while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
  }
  
  odd.next = evenHead;

  return head;
};
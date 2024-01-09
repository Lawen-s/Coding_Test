/**
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/submissions/1141531562/
 */

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
 * @return {number}
 */
var pairSum = function(head) {
  var st = []; 
  while(head != null){
      st.push(head.val);
      head = head.next;
  }
  let max = 0;
  for(let i=0; i<st.length; i++){
      max = Math.max(max, (st[i] + st[st.length-1-i]));
  }
  return max;
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
 * @return {number}
 */
var pairSum = function(head) {
  let max = -Infinity
  let arr = []
  let cur = head
  while (cur) {
      arr.push(cur.val)
      cur = cur.next
      
  }
  
  for (let i = 0; i < arr.length/2; i++) {
      max = Math.max(max, arr[i] + arr[arr.length-1-i])
  }
  return max
};
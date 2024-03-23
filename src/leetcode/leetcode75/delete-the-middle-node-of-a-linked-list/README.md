# 2095.Delete-The-Middle-Node-Of-A-Linked-List

# 링크
[leetcode.2095](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75)

# 날짜
* 24-03-23 - X
* 24-01-09 - X

# 문제 설명
#### 원문


You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.


The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.


For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
***

# EXAMPLES
#### Example 1.


Input: head = [1,3,4,7,1,2,6]


Output: [1,3,4,1,2,6]


Explanation:


The above figure represents the given linked list. The indices of the nodes are written below.


Since n = 7, node 3 with value 7 is the middle node, which is marked in red.


We return the new list after removing this node. 


#### Example 2.


Input: head = [1,2,3,4]


Output: [1,2,4]


Explanation:


The above figure represents the given linked list.


For n = 4, node 2 with value 3 is the middle node, which is marked in red.


#### Example 3.


Input: head = [2,1]


Output: [2]


Explanation:


The above figure represents the given linked list.


For n = 2, node 1 with value 1 is the middle node, which is marked in red.


Node 0 with value 2 is the only node remaining after removing node 1.


#### 문제를 이해하는데 도움이 된 블로그 [링크](https://velog.io/@jewon119/01.%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B8%B0%EC%B4%88-Linked-List)
# 435.Non-Overlapping-Intervals

# 링크

[leetcode.435](https://leetcode.com/problems/non-overlapping-intervals/submissions/1345340264/?envType=study-plan-v2&envId=leetcode-75)

# 날짜

* 24-08-08 - O
* 24-08-07 - O
* 24-08-06 - X
* 23-01-07 - X

# 문제 설명

#### 원문

Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

# EXAMPLES

#### Example 1.


Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.


#### Example 2.


Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.


#### Example 3.

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
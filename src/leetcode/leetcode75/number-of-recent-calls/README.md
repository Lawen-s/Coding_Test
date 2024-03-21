# 735.Number-Of-Recent-Calls

# 링크
[leetcode.933](https://leetcode.com/problems/number-of-recent-calls/description/?envType=study-plan-v2&envId=leetcode-75)

# 날짜
* 24-03-21 - X
* 23-11-29 - X

# 문제 설명
#### 원문


You have a RecentCounter class which counts the number of recent requests within a certain time frame.


Implement the RecentCounter class:


RecentCounter() Initializes the counter with zero recent requests.


int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request).


Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
***

# EXAMPLES
#### Example 1.


Input


["RecentCounter", "ping", "ping", "ping", "ping"]


[[], [1], [100], [3001], [3002]]


Output


[null, 1, 2, 3, 3]


Explanation


RecentCounter recentCounter = new RecentCounter();


recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1


recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2


recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3


recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

#### 문제 이해도를 높일 수 있는 블로그 [링크](https://velog.io/@ysinfrance/933.-Number-of-Recent-Calls)
핑이 요청된 시간의 범위에 기존에 요청했던 핑의 시간이 존재하는지 알아함.
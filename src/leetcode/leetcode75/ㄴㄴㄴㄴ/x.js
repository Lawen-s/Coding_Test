/**
 * https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/submissions/1118919446/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 내가 푼 방식(접근 방식 잘못)
 * 문제 이해가 안된 상태
 * 해당 문제 root node로 돌아갈 수 있는지 문제였음
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  let count = 0;
  function dfs(arr){
      if(arr[0]<arr[1]){
          count++;
          }
  }
  for(let i=0; i<connections.length;i++){
      dfs(connections[i])
  }
  return count
};


/**
 * 
 *  풀이 참고
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  const graph = [];
  const set = new Set();
  
  for (let i = 0; i < n; i++) {
      graph[i] = [];
  }
  
  for (const [u, v] of connections) {
      graph[u].push(v);
      graph[v].push(u);
      set.add(`${u}#${v}`);
  }
  
  let count = 0;
  
  dfs(0, -1)
  
  return count;
  
  
  function dfs(node, parent) {
      
      if (set.has(`${parent}#${node}`)) count++;
      
      for (const nei of graph[node]) {
          if (nei === parent) continue;
     
          dfs(nei, node);
      }
  }
};



/**
 *  설명이 잘된 풀이
 * @param {*} n 
 * @param {*} connections 
 * @returns 
 */
// Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
// Output: 3

var minReorder = function (n, connections) {
  
  // start from zero 
  const dfs = (node) => {

    for (const [city, goZero] of graph[node]) {

      if (map[city]) continue;
      
      // if direction is not towards 0, add count +1 
      if (!goZero) count++;
      
      // because coming from "0"
      map[city] = true;

      dfs(city); 
    }
  } 

  let graph = [];
  
  // will track if each node can reach to "0" or not 
  const map = Array(n).fill(false);
  map[0] = true;

  // prepare for each node/city
  // { '0': [], '1': [], '2': [], '3': [], '4': [], '5': [] }
  for (let i = 0; i < n; i++) 
        graph[i] = []; 

  // connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
  for (const [origin, destination] of connections) {
    graph[origin].push([destination, false]);  // 0 --> target  
    graph[destination].push([origin, true]);   // 0 <-- target 
  }

  let count = 0;
  dfs(0);

  return count;

};

// {
//   '0': [ [ 1, false ], [ 4, true ] ],
//   '1': [ [ 0, true ], [ 3, false ] ],
//   '2': [ [ 3, false ] ],
//   '3': [ [ 1, true ], [ 2, true ] ],
//   '4': [ [ 0, false ], [ 5, false ] ],
//   '5': [ [ 4, true ] ]
// }
/**
 * https://leetcode.com/problems/keys-and-rooms/submissions/1118113645/?envType=study-plan-v2&envId=leetcode-75
 * 24-04-28 - X
 * 23-12-12 - X
 */

/**
 * 24-04-28 - X - 풀이 참고
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  let check = new Set()
  check.add(0)
  function dfs(node){
      node.forEach((key)=>{
          if(!check.has(key)){
              check.add(key)
              dfs(rooms[key])
          }
      })
  }
  dfs(rooms[0])
  return check.size === rooms.length
};


/**
 * 23-12-12 - X
 * 풀이를 보고 이해
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  function dfs(current) {
    current.forEach((node) => {
      if (!visited.has(node)) {
        visited.add(node);
        total++;
        dfs(rooms[node]);
      }
    });
  }

  let visited = new Set();
  visited.add(0);
  let total = 0;

  dfs(rooms[0]);
  return total == rooms.length - 1 ? true : false;
};

/**
 *
 * 효율 좋은 코드
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
  const dfs = (room, visited) => {
    if (!visited.has(room)) {
      visited.add(room);

      for (const key of rooms[room]) {
        dfs(key, visited);
      }
    }

    return visited;
  };

  const visited = dfs(0, new Set());
  return visited.size === rooms.length;
};

// console.log(canVisitAllRooms([[1],[2],[3],[]]))
// console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))

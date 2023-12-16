/**
 * https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/submissions/1120923213/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * BFS 문제 풀이 참고
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
  let [y0,x0]=entrance
  maze[y0][x0] = '@'
  const queue = [[y0, x0, 0]]
  while (queue.length) {
      const [y, x, step] = queue.shift()
      for (const [dy, dx] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
          const ny = y + dy, nx = x + dx
          if (!maze[ny] || !maze[ny][nx]) {
              if (step) return step
          } else if (maze[ny][nx] === '.') {
              queue.push([ny, nx, step + 1])
              maze[ny][nx] = '*'
          }
      }
  }
  return -1
};


/**
 * 효율 좋은 풀이
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */


var nearestExit = function(maze, entrance) {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  
  let queue = [[entrance[0], entrance[1], 0]]
  maze[entrance[0]][entrance[1]] = '+' // mark cell as visited
  
  while(queue.length > 0) {     
      let currentQueue = []
      
      for(let i = 0; i < queue.length; i++) {
          const [currRow, currCol, currDistance] = queue[i]
          // maze[currRow][currCol] = '+' // this will not work as there will be a delay between the moment 
          // that a cell is discovered and added to the queue vs when it is marked as seen
          // it should be marked as seen the moment it is discovered
          
          for(let dir of directions) {
              const nextRow = currRow + dir[0]
              const nextCol = currCol + dir[1]

              // next location cannot be a wall
              // next location cannot be out of bounds
              if(nextRow >= 0 && nextRow < maze.length 
                 && nextCol >= 0 && nextCol < maze[0].length
                 && maze[nextRow][nextCol] === '.'
              ) {
                  if(nextRow === 0 || nextRow === maze.length - 1 
                      || nextCol === 0 || nextCol === maze[0].length - 1
                  ) {
                      return currDistance + 1 // return the exit in the closest layer
                  }

                  currentQueue.push([nextRow, nextCol, currDistance + 1])
                  maze[nextRow][nextCol] = '+';
              }
          }
      }   
      
      queue = currentQueue
  }
  
  // there are no exits
  return -1
};
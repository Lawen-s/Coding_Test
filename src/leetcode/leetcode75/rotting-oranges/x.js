/**
 * https://leetcode.com/problems/rotting-oranges/submissions/1121156121/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 기존에 풀었던 코드를 빌려서 풀어보려했으나 실패
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  let queue = [[0,0, 0]]
  while (queue.length>0){
    let currentQueue = []
    for(let i = 0; i < queue.length; i++) {
      const [currRow, currCol, currDistance] = queue[i]
      for(let dir of directions) {
        const nextRow = currRow + dir[0]
        const nextCol = currCol + dir[1]
        if(nextRow && nextRow<grid.length&&nextCol&&nextCol<grid[0].length&&grind[nextRow][nextCol]===1){
          if(nextRow === 0 || nextRow === grid.length - 1 
            || nextCol === 0 || nextCol === grid[0].length - 1
        ) {
            return currDistance + 1
        }
        currentQueue.push([nextRow, nextCol, currDistance + 1])
        grid[nextRow][nextCol] = 2;
        }
      }
    }
    queue = currentQueue
  }
  return -1;
};


console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]))


/**
 * 풀이를 본 구조 
 * @param {*} grid 
 * @returns 
 */
var orangesRotting = function(grid) {
  //Initialize queue for our BFS, Number of fresh oranges, and time to be returned.
  let queue = [], oranges = 0, time = 0;
  
  //Traverse matrix.  If we find a fresh orange, increment orange count.
  //If we find a rotten one, add it to the queue.
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) oranges++
      else if (grid[r][c] === 2) queue.push([r,c,0]);
    }
  }
    
  //Dirs will help us check neighbors during our BFS.  Adding these coordinates
  //to a point just gets right, left, up and down.  endR and endC are used later
  //to make sure neighbor coords are within grid.
  const dirs = [[0,1], [1,0], [0,-1], [-1,0]];
  const endR = grid.length - 1, endC = grid[0].length - 1;
  
  //Loop while queue is not empty and there are still fresh oranges.
  while (queue.length && oranges) {
  
	//Entry within queue can be destructured to make it easier to work with.
	//Each queue entry has a row, column and number of minutes taken for
	//infection to reach.
    const [curR, curC, mins] = queue.shift();
    
	//If orange is still fresh, we mark it as rotten, decrement our fresh oranges
	//count and set time to = mins.  Since we BFSing, the time it takes to infect
	//the last orange will be the time to infect all.  Once all oranges have
	//been infected, our orange count will = 0 and our condition in while loop
	//will stop the loop.  Time can then be returned.
    if (grid[curR][curC] === 1) {
      grid[curR][curC] = 2;
      oranges--;
      time = mins;
    }

    //Here's where our dir array above comes in handy.  We destructure
	//each entry and add it to our current to get neighbor coords below.
    for (let [addR, addC] of dirs) {
	
	  //Here we obtain our new or neighbor coordinates by adding currentRow
	  //and addRow of dir.  Same for col.
      const [newR, newC] = [curR + addR, curC + addC];
	  
	  //Here we check to make sure new coordinates lie within the grid.
      if (newR < 0 || newR > endR || newC < 0 || newC > endC) continue;
	  
	  //If neighbor coord is valid, and there is a fresh orange at those coordinates
	  //we push coordinates to our BFS to be infected next.  We also increment the
	  //mins count to track time taken to spread to that orange.
      if (grid[newR][newC] === 1) {
        queue.push([newR, newC, mins + 1])
      }
    }
  }
  
  //If we still have uninfected oranges, we return -1 because it won't spread
  //to all.  Otherwise, we simply return the time from initial infected to last
  //infected orange.
  return oranges ? -1 : time;
};


/**
 * 효율 좋은 코드
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let queue = [] 
  let count =0;
  for(let i=0;i< grid.length; i++){
      for(let j=0;j< grid[0].length; j++){
          if(grid[i][j] == 2){
              queue.push([i, j, 0])
          }
          else if(grid[i][j] ==1){
              count++;
          }
      }
  }
   if(queue.length==0) { 
       return count > 0 ? -1 : 0
   }
  let i=0;
  let dirs = [[0,1], [1, 0], [-1, 0], [0, -1]]
  while(i< queue.length){
      let [x, y, time ] =  queue[i];
      for(let [p, q] of dirs){
          let newX = x+p
          let newY = y+q
          if(newX < grid.length && newY< grid[0].length && newX>=0 && newY>=0&& grid[newX][newY] ==1){
              grid[newX][newY] =2
              queue.push([newX, newY, time+1])
              count--;
          }
      }
      i++;
  }
  return count==0 ? queue[queue.length-1][2] :  -1
};
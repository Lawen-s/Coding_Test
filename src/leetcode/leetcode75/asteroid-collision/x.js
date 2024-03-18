/**
 * https://leetcode.com/problems/asteroid-collision/submissions/1108156540/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 24-03-18 - X - 풀이보고 이해
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = []
  
  for (let i = 0; i < asteroids.length; i++) {
      const last = stack[stack.length - 1]
      const curr = asteroids[i]
      
      if (!stack.length || last < 0 || curr > 0) {
          // stack is empty and last and curr not colliding
          stack.push(curr)
      } else if (last + curr === 0) {
          // last and curr collide and cancel each other out
          stack.pop()
      } else if (Math.abs(last) < Math.abs(curr)) {
          // last and curr collide and last is smaller
          stack.pop()
          i--
      }
  }
  
  return stack
};


/**
 * 23-11-28 - X
 * 효율 중간인 답안
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const newArr = [];
  for (const x of asteroids) {
    if (x > 0) {
      newArr.push(x);
    } else {
      while (newArr.length && newArr.at(-1) > 0 && newArr.at(-1) < -x) {
        newArr.pop();
      }
      if (newArr.length && newArr.at(-1) === -x) {
        newArr.pop();
      } else if (!newArr.length || newArr.at(-1) < 0) {
        newArr.push(x);
      }
    }
  }
  return newArr;
};

/**
 * 효율 좋은 답안
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let asteroid of asteroids) {
    while (stack.length !== 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
      let diff = asteroid + stack[stack.length - 1];
      if (diff < 0) {
        stack.pop();
      } else if (diff > 0) {
        asteroid = 0;
      } else {
        asteroid = 0;
        stack.pop();
      }
    }

    if (asteroid !== 0) {
      stack.push(asteroid);
    }
  }

  return stack;
};

console.log(asteroidCollision([5, 10, -5]));
// console.log(asteroidCollision([8,-8]))
// console.log(asteroidCollision([10,2,-5]))

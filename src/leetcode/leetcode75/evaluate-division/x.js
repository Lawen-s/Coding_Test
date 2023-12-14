/**
 * https://leetcode.com/problems/evaluate-division/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 이해가 잘 안되지만 일단 50% 정도 이해는 감
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  
  // Step 1: Build the graph
  let graph = {};
  
  for (let i = 0; i < equations.length; i++) {
    
    let [numerator, denominator] = equations[i];
    
    let value = values[i];
    
    if (!graph[numerator]) {
      graph[numerator] = {};
    }

    if (!graph[denominator]) {
      graph[denominator] = {};
    }

    graph[numerator][denominator] = value;
    graph[denominator][numerator] = 1 / value;
  }

  // Step 2: Evaluate queries using DFS
  let evaluateQuery = (numerator, denominator, visited) => {
    
    if (!(numerator in graph) || !(denominator in graph)) {
      return -1.0;
    }

    if (numerator === denominator) {
      return 1.0;
    }

    visited.add(numerator);
    let neighbors = graph[numerator];

    for (let neighbor in neighbors) {
      
      if (!visited.has(neighbor)) {
        
        let result = evaluateQuery(neighbor, denominator, visited);
        
        if (result !== -1.0) {
          return neighbors[neighbor] * result;
        }
      }
    }

    return -1.0;
  };

  // Step 3: Process queries
  let results = [];
  
  for (let query of queries) {
    
    let [numerator, denominator] = query;
    let visited = new Set();
    let result = evaluateQuery(numerator, denominator, visited);
    
    results.push(result);
  }

  return results;
};



/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const graph = new Map();
  for (let i = 0; i < equations.length; ++i) {
      const [a, b] = equations[i];

      if (!graph.has(a)) graph.set(a, []);
      graph.get(a).push([b, values[i]])

      if (!graph.has(b)) graph.set(b, []);
      graph.get(b).push([a, 1 / values[i]]);
  }

  const visited = new Set();
  const dfs = (num, den) => {
      if (visited.has(num) || !graph.has(num) || !graph.has(den)) return -1;
      visited.add(num);

      for (const [nextDen, value] of graph.get(num)) {
          if (nextDen === den) return value;
          let result = dfs(nextDen, den);
          if (result !== -1) return value * result;
      }

      return -1;
  };

  const results = new Array(queries.length);
  for (let i = 0; i < queries.length; ++i) {
      visited.clear();
      results[i] = dfs(queries[i][0], queries[i][1]);
  }

  return results;
};
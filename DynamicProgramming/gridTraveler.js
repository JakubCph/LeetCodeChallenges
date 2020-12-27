//what is the max number of combinations one can travel n by m grid from top left corner to bottom right corner
//if allowed moves are only {donw,right}
// solution: break down the problem with each move
//Right move: the problem reduces to grid n by m-1
//Down move : problem reduced to grid n-1 by m
//Trivial cases:
//1. One of grid dimention is 0 => solution is 0 moves to the target
//2. grid 1 by 1 has only 1 move; no action since you are already at the target.
//time complexity: O(2^(n+m)) - solution can be represented as a binary tree of height n+m
//space O(n+m)
var gridTraveler = function (n, m) {
    //grid is empty
    if (n === 0 || m === 0) {
        return 0;
    }
    if (n === 1 && m === 1) {
        return 1;
    }
    return gridTraveler(n - 1, m) // go down
        + gridTraveler(n, m - 1); //gor right
};
//Using memoization
var gridTravelerOptimized = function (n, m, memo) {
    if (memo === void 0) { memo = {}; }
    var key = n + ',' + m;
    if (key in memo) {
        return memo[key];
    }
    //grid is empty
    if (n === 0 || m === 0) {
        return 0;
    }
    if (n === 1 && m === 1) {
        return 1;
    }
    memo[key] = gridTravelerOptimized(n - 1, m, memo) // go down
        + gridTravelerOptimized(n, m - 1, memo); //go right
    return memo[key];
};
console.log(gridTravelerOptimized(18, 18));

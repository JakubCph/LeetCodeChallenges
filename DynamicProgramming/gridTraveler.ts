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
const gridTraveler = (n: number,m: number) : number => {
    //grid is empty
    if(n === 0 || m === 0){ 
        return 0;
    }
    if(n === 1 && m === 1){
        return 1;
    }
    return gridTraveler(n-1,m) // go down
                + gridTraveler(n,m-1); //gor right
}

//Using memoization
// time: O(n*m) because the calls to the function can be with combination of the values:
// n ={0,1,2,...,n-1,n}
//m={0,1,...,m-1,m}
//Disallowing duplicates we have n*m distinct combinations
//space :O(n+m)
const gridTravelerOptimized = (n: number,m: number, memo:object = {}) : number => {
    const key = n + ',' + m;
    if(key in memo) {
        return memo[key];
    }
    //grid is empty
    if(n === 0 || m === 0){ 
        return 0;
    }
    if(n === 1 && m === 1){
        return 1;
    }
    memo[key] = gridTravelerOptimized(n-1,m, memo) // go down
    + gridTravelerOptimized(n,m-1,memo); //go right
    return memo[key];
}


console.log(gridTravelerOptimized(18,18));
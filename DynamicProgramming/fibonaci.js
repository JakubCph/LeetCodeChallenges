//Recurssive Fibonacci
//fib = 1, 1, 2, 3, 5, 8, ...
// time : O(2^n)
//space : O(n) - heigh of the tree/max height of stack call
// function fib(n:number): number{
//     if(n < 3){
//         return 1;
//     }
//     return fib(n-1) + fib(n-2);
// }
//time and space: O(n)
var fib = function (n, memo) {
    if (memo === void 0) { memo = {}; }
    if (n <= 2) {
        return 1;
    }
    if (n in memo) {
        return memo[n];
    }
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};
console.log(fib(1));
console.log(fib(2));
console.log(fib(7));
console.log(fib(50));

//Can we find elements in the arr which sum up to target. We can resuse the elements.
//target and elements of array are positive integers
//Time> O(arr.lenght^target)
//worse case if in arr we have element 1 which means we will be subtracting 1 from target ar the root of tree down to leaf of value 0
//height of the tree in worse case: target
//space complecity> O(target)
var canSum = function (target, arr) {
    if (target === 0) {
        return true;
    }
    if (target < 0) {
        return false;
    }
    for (var i = 0; i < arr.length; i++) {
        if (canSum(target - arr[i], arr)) {
            return true;
        }
    }
    return false;
};
console.log(canSum(8, [1, 2, 4]));
var canSumOptimized = function (target, arr, memo) {
    if (memo === void 0) { memo = {}; }
    if (target in memo) {
        return memo[target];
    }
    if (target === 0) {
        return true;
    }
    if (target < 0) {
        return false;
    }
    for (var i = 0; i < arr.length; i++) {
        memo[target] = canSumOptimized(target - arr[i], arr, memo);
        if (memo[target]) {
            return true;
        }
    }
    return false;
};
console.log(canSumOptimized(300, [7, 14]));

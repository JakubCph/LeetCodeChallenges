//Can we find elements in the arr which sum up to target. We can resuse the elements.
//target and elements of array are positive integers
//Time> O(arr.lenght^target)
//worse case if in arr we have element 1 which means we will be subtracting 1 from target ar the root of tree down to leaf of value 0
//height of the tree in worse case: target
//space complecity> O(target)
const canSum = (target: number, arr: number[]) : boolean=>{

    if(target === 0) {
        return true;
    }
    if(target < 0){
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if(canSum(target - arr[i], arr)){
            return true;
        }        
    }
    return false;
}

console.log(canSum(8, [1,2,4]))


//time> O(n*m)
//n = arr.length
//m = target
//space> O(m)
const canSumOptimized = (target: number, arr: number[], memo:object={}) : boolean=>{

    if(target in memo){
        return memo[target];
    }
    if(target === 0) {
        return true;
    }
    if(target < 0){
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if(canSumOptimized(target - arr[i], arr, memo)){
            memo[target] = true;
            return true;
        }        
    }

    memo[target] = false;
    return false;
}


console.log(canSumOptimized(300, [7,14]));
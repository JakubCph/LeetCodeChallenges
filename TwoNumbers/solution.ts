function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if(nums[i] + nums[j] === target && i !== j){
                return [i,j];
            } 
        }
    }
};

const nums = [3,2,4], target = 6;

console.log(twoSum(nums,target));
function twoSum(nums, target) {
    // O(n^2) time complexity, O(1) space complexity
    for (var i = 0; i < nums.length; i++) {
        for (var j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i, j];
            }
        }
    }
}
;
var nums = [3, 2, 4], target = 6;
console.log(twoSum(nums, target));

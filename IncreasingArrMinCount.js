// You are given an integer array nums (0-indexed). 
// In one operation, you can choose an element of the array and increment it by 1.

var minOperations = function (nums) {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            const diff = nums[i - 1] - nums[i];
            nums[i] += diff + 1;
            count += diff + 1;
        }
    }
    return count;
};
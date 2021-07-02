// Given an array nums of n integers and an integer target, 
// find three integers in nums such that the sum is closest to target. 
// Return the sum of the three integers. 
// You may assume that each input would have exactly one solution.

var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Number.NEGATIVE_INFINITY;
    let difference = Number.POSITIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;

        let j = i + 1, k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            const tempDifference = Math.abs(sum - target);

            if (sum === target) {
                return sum;
            }

            if (tempDifference < difference) {
                closestSum = sum;
                difference = tempDifference;
            }

            if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
            }
        }
    }
    return closestSum;
};
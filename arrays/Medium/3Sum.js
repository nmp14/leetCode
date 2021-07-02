// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

var threeSum = function (nums) {
    if (nums.length < 3) return [];
    const res = [];
    const target = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) continue;

        if (nums[i] > target) break;

        let j = i + 1, k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                res.push([nums[i], nums[j], nums[k]]);

                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;

                j++;
                k--;
                continue;
            } else if (sum < target) {
                j++;
                continue;
            } else {
                k--;
                continue;
            }
        }
    }
    return res;
};
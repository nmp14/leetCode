/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Given an integer array nums, 
return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
*/

// Each index is the product of all elements to the left * all to the right.
// So create arr of the products to left of each idx and arr of products to right of idx
// Then mult both together
var productExceptSelf = function (nums) {
    const leftArr = [];
    const rightArr = [];

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        leftArr[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        rightArr[i] = suffix;
        suffix *= nums[i];
        rightArr[i] *= leftArr[i];
    }

    return rightArr;
};
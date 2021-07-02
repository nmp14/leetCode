// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

var intersection = function (nums1, nums2) {
    const res = [];
    const map = new Map();

    for (const num of nums1) {
        if (!map.has(num)) map.set(num, num);
    }

    for (const num of nums2) {
        if (map.has(num)) {
            res.push(num);
            map.delete(num);
        }
    }
    return res;
};
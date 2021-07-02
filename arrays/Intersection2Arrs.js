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

// Same but now add amount shared between both arrs
// IE [4, 9 , 5] and [9, 2, 3, 4, 9, 9] will return [9, 4]
// and [1, 2, 2, 3] and [2, 2, 4] will return [2, 2] since both have two 2's.

var intersect = function (nums1, nums2) {
    const map = new Map();
    const res = [];

    for (const val of nums1) {
        map.has(val)
            ? map.set(val, map.get(val) + 1)
            : map.set(val, 1);
    }

    for (const val2 of nums2) {
        if (map.has(val2)) {
            res.push(val2);
            if (map.get(val2) <= 1) map.delete(val2);
            else map.set(val2, map.get(val2) - 1);
        }
    }
    return res;
};
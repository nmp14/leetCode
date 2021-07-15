var merge = function (nums1, m, nums2, n) {
    const res = [];

    while (nums1[0] !== 0 && nums2.length) {
        if (nums1[0] >= nums2[0]) {
            res.push(nums2.shift());
        } else {
            res.push(nums1.shift());
        }
    }

    if (nums2.length) res.push(...nums2);
    else {
        while (nums1[0] !== 0) {
            res.push(nums1.shift());
        }
    }

    nums1 = [...res];
    console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
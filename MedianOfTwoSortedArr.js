var findMedianSortedArrays = function (nums1, nums2) {
    const newArr = [];

    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            newArr.push(...nums1.splice(0, 1));
        } else {
            newArr.push(...nums2.splice(0, 1));
        }
    }

    if (nums1.length) newArr.push(...nums1);
    else if (nums2.length) newArr.push(...nums2);

    console.log(newArr);

    if (newArr.length % 2 !== 0) {
        return newArr[Math.floor(newArr.length / 2)];
    } else {
        return (newArr[(newArr.length / 2) - 1] + newArr[(newArr.length / 2)]) / 2;
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
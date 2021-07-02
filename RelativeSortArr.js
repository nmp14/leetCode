// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
// 
// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. 
// Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

var relativeSortArray = function (arr1, arr2) {
    const map = new Map();

    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], i);
    }

    const leftOver = arr1.filter(val => !map.has(val)).sort((a, b) => a - b);
    const arr = arr1.filter(val => map.has(val)).sort((a, b) => {
        return map.get(a) - map.get(b);
    });

    return [...arr, ...leftOver];
};
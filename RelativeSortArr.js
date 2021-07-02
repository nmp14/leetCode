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
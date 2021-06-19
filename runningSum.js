var runningSum = function (nums) {
    const newNums = [];
    for (let i = 0; i < nums.length; i++) {
        const eles = nums.slice(0, i + 1);
        const arrSum = eles.reduce((a, b) => a + b, 0);
        newNums[i] = arrSum;
    }
    return newNums;
};

console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
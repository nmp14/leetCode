// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var shuffle = function (nums, n) {
    let leftSide = true;
    const newArr = [];

    const leftArr = nums.slice(0, n);
    const rightArr = nums.slice(n, nums.length);

    let LP = 0;
    let RP = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leftSide) {
            newArr.push(leftArr[LP]);
            LP++;
        } else {
            newArr.push(rightArr[RP]);
            RP++;
        }
        leftSide = !leftSide;
    }
    return newArr;
};
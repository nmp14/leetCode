var isHappy = function (n) {
    const seenMap = new Map();

    while (n !== 1 && !seenMap.has(n)) {
        seenMap.set(n, true);
        n = sumOfDigits(n);
    }

    return n === 1;
};

const sumOfDigits = (num) => {
    return num.toString().split('').reduce((sum, num) => {
        return sum + Math.pow(num, 2);
    }, 0);
}
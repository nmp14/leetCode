var reverse = function (x) {
    const isNegative = x < 0;
    let reversed = parseInt(x.toString(10).split("").reverse().join(""));

    if (isNegative) reversed *= -1;

    if (Math.abs(reversed) > 2147483648) {
        return 0;
    }

    return reversed;
};
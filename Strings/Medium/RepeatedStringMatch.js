var repeatedStringMatch = function (a, b) {
    if (a === b) return 1;
    let count = Math.ceil(b.length / a.length);

    if (a.repeat(count).includes(b)) return count;
    else if (a.repeat(count + 1).includes(b)) return count + 1;

    return -1
};
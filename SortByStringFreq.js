var frequencySort = function (s) {
    const map = new Map();
    let res = "";

    for (const letter of s) {
        if (map.has(letter)) {
            map.set(letter, map.get(letter) + 1);
        } else {
            map.set(letter, 1);
        }
    }

    const sortedMap = new Map([...map.entries()].sort((a, b) => {
        return b[1] - a[1];
    }));

    const entries = sortedMap.entries();

    for (const [key, value] of sortedMap) {
        res += key.repeat(value);
    }

    return res;
};
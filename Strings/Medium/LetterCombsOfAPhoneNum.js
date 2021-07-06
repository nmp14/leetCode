var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    const map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };

    if (digits.length === 1) return map[parseInt(digits[0])];

    const res = [];

    const fun = (i, s) => {
        if (i === digits.length) {
            res.push(s);
            return;
        }

        for (const char of map[digits[i]]) {
            fun(i + 1, s + char);
        }
    };

    fun(0, "");
    return res;
};
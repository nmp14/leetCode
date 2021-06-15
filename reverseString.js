var reverseString = function (s) {
    for (let i = 0, m = Math.floor(s.length / 2); i < m; i++) {
        const copy = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = copy
    }
};
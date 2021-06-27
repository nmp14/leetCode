var longestPalindrome = function (s) {
    if (s.length === 1) return s;
    const sLen = s.length;
    let start = 0, end = 0;

    for (let i = 0; i < sLen; i++) {
        const len1 = expandFromCenter(i, i + 1, s);
        const len2 = expandFromCenter(i, i, s);
        const len = Math.max(len1, len2);

        if (len > end - start) {
            start = Math.ceil(i - ((len - 1) / 2));
            end = i + Math.ceil(len / 2);
        }
    }

    return s.slice(start, end + 1);
};

const expandFromCenter = (left, right, s) => {
    let L = left, R = right;
    while (L >= 0 && R < s.length && (s[L] === s[R])) {
        L--;
        R++;
    }
    return R - L - 1;
};
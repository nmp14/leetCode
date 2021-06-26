var lengthOfLongestSubstring = function (s) {
    const map = new Map();
    let ans = 0;

    for (let j = 0, i = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]), i);
        }
        ans = Math.max(ans, j - i + 1);
        map.set(s[j], j + 1);
    }
    return ans;
};
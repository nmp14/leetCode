// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

var restoreString = function (s, indices) {
    let ans = new Array(s.length);
    let i = 0;

    while (indices.length > 0) {
        ans[indices[0]] = s.slice(i, i + 1);
        indices.shift();
        i++;
    }

    return ans.join("");
};
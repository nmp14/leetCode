// Check if the strings will be equal with only 1 swap of 2 letters in a single one of the 2.
// Return true if they're also the same originally.

var areAlmostEqual = function (s1, s2) {
    let nonEqual = 0;
    const set2 = new Set(s2);

    for (const letter of s1) {
        if (!set2.has(letter)) return false;
    }

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) continue;
        else nonEqual++;
    }

    if (nonEqual === 0 || nonEqual === 2) return true;
    else return false;
};
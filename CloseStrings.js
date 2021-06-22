// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;

    const letterCounts1 = {};
    const letterCounts2 = {};

    for (let i = 0; i < word1.length; i++) {
        if (!letterCounts1[word1[i]]) {
            letterCounts1[word1[i]] = 1;
        } else if (letterCounts1[word1[i]]) {
            letterCounts1[word1[i]]++;
        }

        if (!letterCounts2[word2[i]]) {
            letterCounts2[word2[i]] = 1;
        } else if (letterCounts2[word2[i]]) {
            letterCounts2[word2[i]]++;
        }
    }

    const letters1 = Object.entries(letterCounts1).sort(([, a], [, b]) => b - a);
    const letters2 = Object.entries(letterCounts2).sort(([, a], [, b]) => b - a);

    if (letters1.length !== letters2.length) return false;

    for (let j = 0; j < letters1.length; j++) {
        if (letters1[j][1] !== letters2[j][1]) return false;
        if (!(letters1[j][0] in letterCounts2) || !(letters2[j][0] in letterCounts1)) {
            return false;
        }
    }

    return true;
};
// Given a string s of zeros and ones, 
// return the maximum score after splitting the string into two non-empty substrings
// (i.e. left substring and right substring).

var maxScore = function (s) {
    let split = 1, max = 0;

    for (let i = 0; i < s.length - 1; i++) {
        const left = s.slice(0, split);
        const right = s.slice(split, s.length);
        let score = 0;

        for (const num of left) {
            if (num === "0") score++;
        }

        for (const num of right) {
            if (num === "1") score++;
        }

        max = Math.max(max, score);
        split++;
    }

    return max;
};
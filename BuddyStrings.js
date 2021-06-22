// check if you can swap exactly two letters in s to get goal back.

var buddyStrings = function (s, goal) {
    if (s.length !== goal.length) return false;

    if (s === goal) {
        const set = new Set();
        for (const letter of s) {
            if (set.has(letter)) return true;
            set.add(letter);
        }
        return false;
    }

    let nonEqual = 0;
    const pairs = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            nonEqual++;
            pairs.push(s[i], goal[i]);
            if (nonEqual > 2) return false;
        }
    }

    // if s[i] === goal[j] and s[j] === goal[i] they will swap correctly if only 2 different letters
    if (nonEqual === 2 && pairs[0] === pairs[3] && pairs[1] === pairs[2]) return true;
    else return false;
};
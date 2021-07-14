var minNumberOfFrogs = function (croakOfFrogs) {
    if (croakOfFrogs.length % 5 !== 0) return -1;
    const map = { 'c': 0, 'r': 1, 'o': 2, 'a': 3, 'k': 4 };
    const count = Array(4).fill(0);
    let totalFrogs = 0;
    let maxFrogCount = 0;

    for (let c of croakOfFrogs) {
        const idx = map[c];
        if (idx === 0) {
            count[idx]++;
            totalFrogs++;
            maxFrogCount = Math.max(maxFrogCount, totalFrogs);
        } else {
            if (count[idx - 1] === 0) return -1;
            count[idx - 1]--;
            if (idx === 4) totalFrogs--;
            else count[idx]++;
        }
    }
    return maxFrogCount;
};

console.log(minNumberOfFrogs("crcoakroak"));
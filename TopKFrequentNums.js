var topKFrequent = function (nums, k) {
    const map = new Map();
    const bucket = [];
    const result = [];

    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    for (const [num, freq] of map) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i])
        if (result.length === k) break;
    }

    return result;
};
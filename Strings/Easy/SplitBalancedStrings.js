var balancedStringSplit = function (s) {
    let match = 0;
    let count = 0;

    for (let i = 0, n = s.length; i < n; i++) {
        if (s[i] === "R") count++;
        else if (s[i] === "L") count--;

        if (count === 0) match++;
    }

    return match;
};

balancedStringSplit("RLRRLLRLRL");
var isValid = function (s) {
    const map = {
        "}": "{",
        "]": "[",
        ")": "("
    };

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            if (stack.length === 0) return false;

            const last = stack.pop();

            if (map[s[i]] !== last) return false;


        } else {
            stack.push(s[i]);
        }
    }

    if (stack.length !== 0) return false;
    return true;
};
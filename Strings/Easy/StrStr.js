// Implement indexOf

// Brute force solution
var strStr = function (haystack, needle) {
    let idx = -1;

    if (needle === "") return 0;

    for (let i = 0; i < haystack.length; i++) {
        let j = 0;
        const tempI = i;
        while (haystack[i] === needle[j] && j < needle.length) {
            if (j === needle.length - 1) {
                return tempI;
            }
            i++;
            j++;
        }
        j = 0;
        i = tempI;
    }
    return idx;
};

// Improved soln 
var strStr = function (haystack, needle) {
    let idx = -1;
    if (needle === "") return 0;
    const n = needle.length;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            const checkString = haystack.slice(i, i + n);
            if (checkString === needle) {
                return i;
            }
        }
    }
    return idx;
};
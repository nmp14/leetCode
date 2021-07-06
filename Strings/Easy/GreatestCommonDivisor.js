// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    if (str1.length < str2.length) {
        [str1, str2] = [str2, str1];
    }

    let prefix = str1;

    while (str2.indexOf(prefix) !== 0 || str1.length % prefix.length !== 0 || str2.length % prefix.length !== 0) {
        prefix = prefix.slice(0, prefix.length - 1);
    }

    return prefix;
};
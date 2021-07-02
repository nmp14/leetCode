// Given an array words of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  
// For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

//You may return the answer in any order.

var commonChars = function (words) {
    if (words.length === 1) return words[0].split("");
    const res = [];

    const letters = words[0].split("");

    for (letter of letters) {
        if (words.every(word => word.includes(letter))) {
            res.push(letter);
            words = words.map(word => word.replace(letter, ""));
        }
    }

    return res;
};
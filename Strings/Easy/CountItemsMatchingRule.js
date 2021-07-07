// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. 
// You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;

    for (let i = 0; i < items.length; i++) {
        switch (ruleKey) {
            case "type":
                ruleValue === items[i][0] ? count++ : count = count;
                break;
            case "color":
                ruleValue === items[i][1] ? count++ : count = count;
                break;
            case "name":
                ruleValue === items[i][2] ? count++ : count = count;
            default:
                continue;
        }
    }

    return count;
};
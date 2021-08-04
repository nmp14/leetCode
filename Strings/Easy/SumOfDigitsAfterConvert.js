var getLucky = function (s, k) {
    let ss = [...s].reduce((acc, curr) => acc + (curr.charCodeAt() - 96), "");

    while (k--) {
        ss = [...ss].reduce((acc, curr) => acc + parseInt(curr), 0).toString();
    }

    return ss;
};
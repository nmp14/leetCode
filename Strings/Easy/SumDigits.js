var addDigits = function (num) {
    let ss = num.toString();

    console.log(ss);
    while ([...ss].length > 1) {
        ss = [...ss].reduce((acc, curr) => acc + +curr, 0).toString();
    }

    return parseInt(ss);
};

console.log(addDigits(38));

// faster version online 

const addDigits2 = (num) => {
    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
}
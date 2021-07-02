// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

var trap = function (h) {
    let lp = 0, rp = h.length - 1;
    let left_max = 0;
    let right_max = 0;
    let ans = 0;

    while (lp < rp) {
        if (h[lp] < h[rp]) {
            if (h[lp] >= left_max) left_max = h[lp];
            else ans += left_max - h[lp];

            lp++;
        } else {
            if (h[rp] >= right_max) right_max = h[rp];
            else ans += right_max - h[rp];

            rp--;
        }
    }

    return ans;
};
var maxArea = function (h) {
    let first = 0, last = h.length - 1;

    // area = width * heigh. Start with max width of container
    let max = 0;

    while (first < last) {
        // area = height of smaller bar * width - 1
        max = Math.max(max, Math.min(h[first], h[last]) * (last - first));
        if (h[first] < h[last]) first++;
        else last--;
    }

    return max;
};

maxArea([2, 3, 4, 5, 18, 17, 6]);
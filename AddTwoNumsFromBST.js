const findTarget = function (root, k) {
    const map = new Map();

    return find(root, k, map);
};

const find = (root, k, set) => {
    if (!root) return false;
    if (set.has(k - root.val)) return true;

    set.set(root.val);

    return find(root.left, k, set) || find(root.right, k, set);
}
var hasCycle = function (head) {
    if (!head || head.next === null) return false;
    head.seen = true;

    let node = head.next;

    while (node && node.next !== null) {
        if (node.seen) return true;
        node.seen = true;
        node = node.next;
    }
    return false;
};
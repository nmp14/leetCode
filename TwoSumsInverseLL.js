var addTwoNumbers = function (l1, l2) {
    let node = null;
    const overFlow = arguments[2];

    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const next1 = l1 ? l1.next : null;
        const next2 = l2 ? l2.next : null;

        const val = overFlow ? val1 + val2 + 1 : val1 + val2;

        node = new ListNode(val % 10);
        node.next = addTwoNumbers(next1, next2, val >= 10);
    } else if (overFlow) {
        node = new ListNode(1);
        node.next = null;
    }
    return node;
};
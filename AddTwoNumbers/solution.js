var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var dummy = new ListNode();
    var current = dummy;
    var p1 = l1;
    var p2 = l2;
    var carryOver = 0;
    while (p1 !== null || p2 !== null) {
        var x = (p1 !== null) ? p1.val : 0;
        var y = (p2 !== null) ? p2.val : 0;
        var sum = x + y + carryOver;
        current.next = new ListNode(sum % 10);
        carryOver = sum > 10 ? 1 : 0;
        current = current.next;
        if (p1 !== null)
            p1 = p1.next;
        if (p2 !== null)
            p2 = p2.next;
    }
    if (carryOver)
        current.next = new ListNode(carryOver);
    return dummy.next;
}
;
var l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
var l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
function printList(l) {
    while (l) {
        console.log("Value: " + l.val + ", next: " + l.next);
        l = l.next;
    }
}
printList(addTwoNumbers(l1, l2));

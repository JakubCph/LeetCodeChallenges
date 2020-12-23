
class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    var dummy = new ListNode();
    var current = dummy;
    var p1 = l1;
    var p2 = l2;
    var carryOver = 0; 
    while(p1 !== null || p2 !== null)
    {
        let x = (p1 !== null) ? p1.val : 0;
        let y = (p2 !== null) ? p2.val : 0;
        
        let sum = x + y + carryOver;
        current.next = new ListNode(sum % 10);
        
        carryOver = sum >= 10 ? 1 : 0;
        current = current.next;
        if(p1 !== null) p1 = p1.next;
        if(p2 !== null) p2 = p2.next;
    }
    if(carryOver > 0) current.next = new ListNode(carryOver);

    return dummy.next;
};


var l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
var l2 = new ListNode(5, new ListNode(6, new ListNode(4)));



function printList(l : ListNode){
    while(l){
        console.log(`Value: ${l.val}, next: ${l.next}`);
        l = l.next;
    }
}

printList(addTwoNumbers(l1,l2))
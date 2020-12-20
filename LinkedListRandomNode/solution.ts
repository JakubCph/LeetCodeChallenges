export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// time complexity > O(n) - walks the list twice
// space complexity > O(1)  

class Solution {
    count : number;
    head : ListNode;
    constructor(head: ListNode) {
        this.head = head;
        this.count = this.countNodes(head);
    }
    getRandom(): number {
        var random = Math.random(); 
        var pos = random*this.count - 1;
        console.log(pos)
        return this.elementAt(pos);
    }

    elementAt(pos: number) : number
    {
        var current = this.head;
        for (let i = 0; i < pos; i++) {
            current = current.next;
        }
        return current.val;
    }
    countNodes(head: ListNode) : number
    {
        var count = 0;
        var current = head;
        while(current !== null)
        {
            current = current.next;
            count++;
        }
        return count;
    }
}


var head = new ListNode(1, new ListNode(2, new ListNode(3)));
var obj = new Solution(head)

var param_1 = obj.getRandom();

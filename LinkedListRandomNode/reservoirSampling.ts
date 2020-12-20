// reservoir sampling algorihtm for returning random sample from a stream (unknown size) and fixed space complexity
import {ListNode} from "./solution"

class Reservoir {
    count : number;
    head : ListNode;
    constructor(head: ListNode) {
        this.head = head;
    }
    getRandom(): number {
        var iter = 1; // number of iterated elements so far
        var current = this.head;
        var returned = current.val;
        while(current !== null){
            if(Math.random() * iter < 1){
                returned = current.val
            }

            current = current.next;
            iter++;
        }

        return returned;
    }

}

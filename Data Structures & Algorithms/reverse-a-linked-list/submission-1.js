/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
     var resultList = [];
        var current = head;

        var prev = null;
       while (current !=null){
            var next = current.next;
            current.next = prev;
            prev = current;
            current = next  
       }
       console.log(prev)
          return prev
    }
}

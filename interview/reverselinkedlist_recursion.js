/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if(head==null) return null;
    
    let r=reverse(new ListNode(head.val),head.next);
    
    return r
    
};


function reverse(parent, node){
    if(node==null) return parent;
    
    let l=new ListNode(node.val);
    l.next=parent;
    parent=reverse(l,node.next);
    
    return parent;
    
}
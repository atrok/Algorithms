/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    var arr=[];
    //console.log(head);
    
    if(head==null) return null;
    
    let r=ListNode(head.val);
    
    while(head!=null){
        
        let l=new ListNode(head.val)
        l.next=r;
        r=l;
        head=head.next;
    }
        
    
    
    //console.log(r)
    
    return r
    
};
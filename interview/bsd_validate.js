/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

        return compare(root, -Infinity,+Infinity);
    };
    
    function compare(node, min, max){
        
        if (node==null)
            return true;
    
        var c=(min<node.val&&node.val<max)
        var c1=compare(node.left,min,node.val)
        var c2=compare(node.right,node.val,max);
        
        return (c&&c1&&c2);
    }
    
    
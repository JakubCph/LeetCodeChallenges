class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree,
// and every node has no left child and only one right child.

 
function increasingBST(root: TreeNode | null): TreeNode | null {
    
    var newHead : TreeNode;
    var current : TreeNode;
    
    newHead = new TreeNode();
    current = newHead;
    traverseInOrder(root);
    return newHead.right;


    function traverseInOrder(node: TreeNode | null) : void
    {
        if(node === null) return;
        traverseInOrder(node.left);
        node.left = null;
        current.right = node;
        current = node; //advance the current
        traverseInOrder(node.right);
    }
};
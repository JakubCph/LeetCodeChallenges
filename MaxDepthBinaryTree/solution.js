// calculate the maximum depth of the binary tree
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
//          3
//       /    \
//      9       20
//              / \
//             15  7      
// Input: root = [1,null,2]
// Output: 2
//           1
//              \
//                 2 
//In B tree we have max number of nodes on next level being 2 the number on the previous level
// relationship between levels and nodes: max number of nodes is 2^0 + 2^1 + 2^3 +....+2^(levels-1)
//IN other words: Nmax = 
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
// in perfect full binayr tree n = 2^(h+1)-1
//The input array gives us the values for each node as if the tree is perfect 
// So h= ln(n+1)-1
function maxDepth(root) {
    if (root === null)
        return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

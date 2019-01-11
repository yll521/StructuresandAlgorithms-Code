/*********************
二叉树的中序遍历(左根右)
exp:
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
**********************/

// 一个全局变量result 递归的时候直接作用于全局变量
function inorderTraversal(root){
    let result = [];
    inorderTraversalCall(root);
    function inorderTraversalCall(node){
        if(!node){
            return ;
        }
        inorderTraversalCall(node.left);
        result.push(node.val);
        inorderTraversalCall(node.right);
    }
    return result;
}

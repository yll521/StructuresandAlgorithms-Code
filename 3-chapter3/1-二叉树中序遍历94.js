/*********************
二叉树的中序遍历
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
**********************/
function inorderTraversal(root){
    let result = [];
    inorderTraversalCal(root);
    function inorderTraversalCal(node){
        if(!node){
            return;
        }
        inorderTraversalCal(node.left);
        result.push(node.val);
        inorderTraversalCal(node.right);
    }
    return result;
}

/**
 * 迭代的方式
 * 用手写的栈代替递归
 * 
 * 一直深入到最左下的节点，将沿途的节点都push到栈里
 * 直到当前节点为空的时候 弹出栈顶节点，打印节点的值，
 * 然后将当前节点的右节点压入栈
 */
function inorderTraversal2(root){
    let 
        stack = [],
        result = [];
    while(root!=null||stack.length>0){
        if(root!=null){
            // 一直往左下延申
            stack.push(root);
            root = root.left;
        }else{
            // 当触礁
            root = stack.pop();
            result.push(root.val);// 打印当前值
            root = root.right;
        }
    }
    return result;
}
/*********************
二叉树的后序遍历
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
左右根
**********************/
function postorderTraversal(root){
    let result = [];
    postorderTraversalCall(root);
    return result;
    function postorderTraversalCall(root){
        if(root==null){
            return ;
        }
        postorderTraversalCall(root.left);
        postorderTraversalCall(root.right);
        result.push(root.val);
    }
}
/*****
 * 迭代的思路：
 *  与中序、前序的迭代相比难度提高了一层(等级都变成难了..)
 *  主要是 左右根的写法 涉及了 兄弟直接的访问 由左节点到达右节点
 * 
*/


/*****
 * 取巧：
 *      先序是根左右 将先序时时访问改为根右左  
 *      两个栈实现
 *      stack:    先插入root，再插入root.right，再插入root.left。
 *      stack2： 存放每次stack1 pop出来的值 即反向了
 */

function postorderTraversal(root){
    let 
        result = [],
        stack1 = [],
        stack2 = [];
    if(!root) return [];
    stack1.push(root);

    while(stack1.length>0){
        let node = stack1.pop();
        stack2.push(node);
        if(node.left!=null) stack1.push(node.left)
        if(node.right!=null) stack1.push(node.right)
    }
    while(stack2.length>0){
        result.push(stack2.pop().val)
    }
    return result;
}

/****
 * 改进
 */

function postorderTraversal(root){
    let 
        result = [],
        stack = [];
    if(!root) return result;
    stack.push(root)
    while(stack.length>0){
        let node = stack.pop()
        result.unshift(node.val)// [...,根]、[...,右,根]、[左、右、根]
        if(node.left!=null) stack.push(node.left)
        if(node.right!=null) stack.push(node.right)
    }
    return result
}
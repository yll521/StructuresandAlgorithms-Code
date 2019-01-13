/*********************
二叉树的前序遍历
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3]
根左右
**********************/
function preorderTraversal(root){
    let result = [];
    preorderTraversalCall(root);
    return result;
    function preorderTraversalCall(root){
        if(!root){
            return;
        }
        result.push(root.val);
        preorderTraversalCall(root.left)
        preorderTraversalCall(root.right)
    }
}

function preorderTraversal2(root){
    let 
        result = [],
        stack = [];
    while(root!=null||stack.length>0){
        if(root!=null){
            result.push(root.val);
            stack.push(root);
            root = root.left;
        }else{
            root = stack.pop()
            root = root.right;
        }
    }
    return result;
}

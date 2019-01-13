/*********************
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

[3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7
[
  [3],
  [9,20],
  [15,7]
]
// 85.62%
**********************/
/****
 * 思路：
 *  下一层的数据来源于上一层
 *  [root]
 *  [root.left,root.right]
 *  [root.left.left,root.left.right,root.right.left,root.right.tight]
 *  
 *  所以下次函数执行的时候需要知道(传入上一层的nodes)
 *  每一层的逻辑是一致的，遍历上一层，然后生成下一层nodes，顺便将vals生成到result里
 *  即可用递归
 */
function levelOrder(root){
    if(!root) return []
    let result = [];
    levelOrderCall([root]);
    function levelOrderCall(preNodeArr){
        if(!preNodeArr.length){
            return;
        }
        let curArr = [];//记录nodes
        let curRes = [];//记录nodes.val
        preNodeArr.forEach(node => {
            curRes.push(node.val);
            if(node.left!==null) curArr.push(node.left)
            if(node.right!==null) curArr.push(node.right)
        });
        result.push(curRes);
        levelOrderCall(curArr);
    }
    return result
}

// 改为迭代

function levelOrder(root){
    if(!root) return [];
    let 
        nodesArr = [],
        resArr = [];
    nodesArr.push(root);
    while(nodesArr.length){
        let 
            curRes = [],
            len = nodesArr.length;// 必须要定义一个 不然迭代的时候每次都是新的
        // 每次遍历取出一个节点，新来的节点push到后面
        // 这种办法来隔开层与层
        for(let i=0;i<len;i++){
            let curNode = nodesArr.shift();
            curRes.push(curNode.val)
            if(curNode.left!=null) nodesArr.push(curNode.left)
            if(curNode.right!=null) nodesArr.push(curNode.right)
        }
        resArr.push(curRes)
    }
    return resArr
}


function levelOrder(root){
    if(!root) return [];
    let 
        result = [],
        nodesArr = [root];
    while(nodesArr.length>0){
        let 
            curRes = [],
            len = nodesArr.length;//用一个数组存放两个层的技巧
        while(len>0){
            let curNode = nodesArr.shift();
            curRes.push(curNode.val)
            if(curNode.left!=null) nodesArr.push(curNode.left)
            if(curNode.right!=null) nodesArr.push(curNode.right)
            len--;
        }
        result.push(curRes);
    }
    return result;
}
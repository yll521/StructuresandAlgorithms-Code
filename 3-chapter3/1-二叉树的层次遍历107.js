/*********************
给定一个二叉树，返回其节点值自底向上的层次遍历
即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历

[3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7

[
  [15,7],
  [9,20],
  [3]
]
**********************/
/***
 * 思路：
 *    push 改为unshift就行了
 */

function levelOrderBottom(root){
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
      result.unshift(curRes);
  }
  return result;
}
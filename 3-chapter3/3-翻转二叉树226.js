/*********************
翻转二叉树

输入：
     4
   /   \
  2     7
 / \   / \
1   3 6   9

输出：
     4
   /   \
  7     2
 / \   / \
9   6 3   1

**********************/
/***
 * 思考：
 * 1、如果是层序遍历的思考：
 *     每一层逆序
 * 2、如果是树划分：
 *     逐层往下缩小树，每一层的根节点都交换左右子节点
 */
function invertTree(root){
    if(root==null){
        return null;
    }
    swapTree(root);
    invertTree(root.right);
    invertTree(root.left);
    return root;
    function swapTree(root){
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
    }
}

// 层序
function invertTree(root){
    if(root==null){
        return root
    }
    let nodes = [root];
    while(nodes.length){
        let len  =  nodes.length;
        while(len--){
            // 从左到右取出当前层的节点
            let node =  nodes.shift();
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
            node.left&&nodes.push(node.left);
            node.right&&nodes.push(node.right);
        }
    }
    return root
}
/*********************
中序后序构造二叉树

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]

    3
   / \
  9  20
    /  \
   15   7
**********************/
/****
 * 和前序+中序遍历构造二叉树的异同
 * 前序+中序：
 *     前序： 根左右
 *     中序： 左根右
 * 核心思路是： 在前序找到根节点(第一个节点),
 *             再根据根节点左右分
 * 
 * 中序+后序：
 *      后序：左右根
 *      中序：左根右
 * 思路：
 *      每次取根节点在 后序的尾元素上
 */
function buildTree(inorder,postorder){
    if(inorder.length<1||postorder.length<1){
        return null;
    }
    let root = postorder[postorder.length-1];
    // root =  postorder.pop()
    let head = new TreeNode(root);
    let pos = inorder.indexOf(root);
    head.left =  buildTree(inorder.slice(0,pos),postorder.slice(0,pos));
    head.right = buildTree(inorder.slice(pos+1),postorder.slice(pos,postorder.length-1));
    return head;
}
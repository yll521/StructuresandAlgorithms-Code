/*********************
前序后序构造二叉树

输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
输出：[1,2,3,4,5,6,7]

pre 和 post 遍历中的值是不同的正整数。
**********************/
/*****
 *  可能产生多种解的岔路：
 *      1、根据前后序区分出左右: 
 *      2、根据区分出的左右重建树
 * [1,|2,4,5,3,6,7] 根左右
 * [4,5,2,6,7,3,|1] 左右根
 * 以1为根区分出的左右：
 * 2：x; 
 * 2,4:x
 * 2,4,5:√
 * 2，4，5，3：x
 * 而2，4，5的左分区还原成左子树可能为
 * 前序：2、4、5
 * 后序：4、5、2
 *   2               2
 *  / \    or       / \
 * 4   5           4
 *                / \
 *                   5
 * 递归思想：
 *      我们可以在前序里确定根元素
 *      然后在区分前序的时候：试探？
 * ==-> 前序的第二个元素可以确定的是 属于前序
 *      那么我们可以在后序里找到该元素的位置，依据左右根
 *      知道后序中，至少在该元素以前的元素都是左区域的
 *      那么可以依据此划分左右。
 * btw: slice(start,end)是左闭右开
 */
function constructFromPrePost(pre,post){
    if(pre.length<1) return null;
    if(pre.length==1) return new TreeNode(pre[0]);
    let head = new TreeNode(pre[0]);
    let 
        leftVal = pre[1],
        leftValIndex =  post.indexOf(leftVal);
    //+2是因为 1左闭右开的原因，2.去除掉第一个元素root
    head.left = constructFromPrePost(pre.slice(1,leftValIndex+2),post.slice(0,leftValIndex+1));
    head.right = constructFromPrePost(pre.slice(leftValIndex+2),post.slice(leftValIndex+1));
    return head;
}
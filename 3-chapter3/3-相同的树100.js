/*********************
如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true

输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
**********************/
/****
 * 这里的相等树 其实就是 对称树判断相等的逻辑
 */
function isSameTree(p,q){
    if(!p&&!q){
        return true
    }
    if(!p||!q){
        return false;
    }
    return p.val==q.val
    &&isSameTree(p.left,q.left)
    &&isSameTree(p.right,q.right)
}
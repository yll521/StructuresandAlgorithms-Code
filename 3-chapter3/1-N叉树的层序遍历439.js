/*********************
n叉树的层序遍历
function Node(val,children) {
    this.val = val;
    this.children = children;
};
**********************/
/***
 * node.children 就是nodes组成的数组了不用自己再维护一个curNodesArr
 * 
 */
function levelOrder(root){
    if(!root) return []
    let result = []
    levelOrderCall([root]);
    return result;
    function levelOrderCall(arr){
        if(!arr.length||!arr){
            return 
        }
        let curRes = [];
        let curNodes = [];
        arr.forEach(node => {
            curRes.push(node.val)
            if(node.children!=null){
                curNodes = curNodes.concat(node.children)
            }
        }); 
        result.push(curRes)
        levelOrderCall(curNodes)
    }
}
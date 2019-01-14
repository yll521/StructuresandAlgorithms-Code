/*********************
根据一棵树的前序遍历与中序遍历构造二叉树。
exp:
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]

返回：
    3
   / \
  9  20
    /  \
   15   7

function TreeNode(val){
    this.val = val
    this.left/this.right
}
**********************/
/****
 * 思路：
 *  前序遍历 preorder = [3,9,20,15,7] 根左右
    中序遍历 inorder = [9,3,15,20,7] 左根右
 * 利用父子关系 当父是n时 其左右节点分别为 2n 2n+1 (n从1开始)
 * 所以构造出数组
 *      [3,9,10,null,null,15,7]
 * 然后根据数组生成tree
 * 
 * 1、怎么根据前序中序的数组，得到当前的n？
 *  前序:[3,9,20,15,7] 根左右
 *  中序:[9,3,15,20,7] 左右根
 * 
 * 前序确定根: 3-> n=1
 * 中序依据前序确定的根 划分左右子树  
 *      9 |3| 15 20 7 
 * 然后 9、15 20 7 为两组分别考虑
 * 依据前序 得到9是左边的根， 9-> 1*2+0=2 (1来自上层)
 * 然后考虑右边：
 *     15 20 7 
 *  得到20是根: 20-> 1*2+1=3
 * 然后依据20将剩下的分为两组，15、7 
 * 15是左根：2*3
 * 7是右根：2*3+1=7
 * 得到的脚标的每一步作用 ：a[index]  = curdata
 * [3,9,20,null,null,15,7]
 * 
 * 然后依据得到的数组 遍历得到tree
 */
// 传入的两个参数是数组类型
buildTree([3,9,20,15,7],[9,3,15,20,7])
function buildTree(preorder,inorder){
    let treeArr = [];
    let curRoot = preorder[0];// 根节点
    departArr(inorder,curRoot,1,0)// 参数配置令生成的curIndex=1
    /****
     * arr: 预被root分割成两个子节点数组的本层数组
     * curRoot：本层节点，(下层的父节点)
     * isRight：当前数组是否为右节点 
     * prevIndex直接上级父节点的index
     */
    function departArr(arr,curRoot,isRight,prevIndex){
        //base-case 如果treeArr里包含了preorder的每个数 则返回
        // 无法通过previndex确定
        let count = 0;
        treeArr.forEach(item=>{
            if(item||item==0){
                count++;
            }
        })
        if(count==preorder.length){
            return ;
        }
        let curIndex = 2*prevIndex+isRight;
        //如果被分的数组长度为1 则无需再分了
        if(arr.length>1){
            let rootIndex = arr.indexOf(curRoot);// 下标
            let lArr = arr.slice(0).splice(0,rootIndex);//截取curRoot左边的
            let rArr = arr.slice(0).splice(rootIndex+1);// 截取curRoot右边的
            let lRoot = findRoot(lArr);
            let rRoot = findRoot(rArr);
            departArr(lArr,lRoot,0,curIndex);
            departArr(rArr,rRoot,1,curIndex);
        }
        treeArr[curIndex] = curRoot;// 数组从1开始
    }

    function findRoot(arr){
        let minIndex = Number.MAX_VALUE;
        // 遍历当前arr 在preorder数组里找arr元素中最靠前的 是为当前层的根元素
        // 默认树中的数不会重复..
        arr.forEach(item => {
            let curIndex = preorder.indexOf(item);
            minIndex = minIndex<curIndex?minIndex:curIndex;
        });
        return preorder[minIndex];
    }
}
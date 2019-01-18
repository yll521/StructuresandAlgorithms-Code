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
 * 
 * ===->
 *  通过199/203测试用例
 *  ?
 */
/****
 * 根据得到的数组 生成一个tree
 * tree结构： 
 * node:{
 *  this.val = val;
 *  this.left =  xxnode;
 *  this.right = xxnode;
 * }
 */
// 传入的两个参数是数组类型
buildTree([],[])
function buildTree(preorder,inorder){
    if(preorder.length<1||inorder.length<1){
        return null;
    }
    let treeArr = [];
    let curRoot = preorder[0];// 根节点
    let head = new TreeNode(curRoot);
    departArr(inorder,curRoot,1,0)// 参数配置令生成的curIndex=1
    arr2Tree(head,1);// 1表示treeArr是从1开始的
    return head;
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
        // 遍历当前arr 在preorder数组里找arr元素中最靠前的 是为当前层的根元素
        // 默认树中的数不会重复..
        // let minIndex = Number.MAX_VALUE;
        // arr.forEach(item => {
        //     let curIndex = preorder.indexOf(item);
        //     minIndex = minIndex<curIndex?minIndex:curIndex;
        // });
        // return preorder[minIndex]
        for(let i=0;i<preorder.length;i++){
            let curItem = preorder[i];
            if(arr.includes(curItem)){
                return curItem
            }
        }
    }

    function arr2Tree(node,index){
        let len = treeArr.length;
        if(index>=len-1){
            return;
        }
        let lIndex = 2*index;
        let rIndex = 2*index+1;
        node.left = treeArr[lIndex]?new TreeNode(treeArr[lIndex]):null;
        node.right = treeArr[rIndex]?new TreeNode(treeArr[rIndex]):null;
        if(node.left){
            lIndex<len&&arr2Tree(node.left,lIndex);
        }
        if(node.right){
            rIndex<len&&arr2Tree(node.right,rIndex);
        }   
    }
}

/***
 * 社区
 * 思想还是一致，在前序(根左右)找根节点 中序(左根右)根据根节点区分左右子树
 * 但是人家写的真的很精炼..
 * 32.64%
 */
function buildTree(preorder,inorder){
    if(preorder.length<1||inorder.length<1){
        return null;
    }
    let root = preorder[0];//在前序里找到的根节点
    let head = new TreeNode(root);
    let pos = inorder.indexOf(root);
    // 前序根左右的区分，根据中序的pos值，
    // 在前序里去掉首个根 截取到pos处(post也相当于左的0个数了)
    head.left = buildTree(preorder.slice(1,pos+1),inorder.slice(0,pos));
    head.right = buildTree(preorder.slice(pos+1),inorder.slice(1+pos));
    return head
}

/***
 * 精简
 * slice耗费性能，优化？
 */
var buildTree = function(preorder, inorder) {
    // eslint-disable-next-line
    if (!Array.isArray(preorder) || !Array.isArray(inorder) || !preorder.length || !inorder.length || preorder.length !== inorder.length) {
        return null;
    }

    return creator(preorder, inorder, 0, 0, inorder.length - 1);
}

/**
 * 构造一棵树，为了不使用 slice 影响性能，传入所有值，用下标来标出构造的树所使用的元素
 * @param {*} preorder 所有值
 * @param {*} inorder 所有值
 * @param {*} preStart 前序的开始位置
 * @param {*} inStart 中序的开始位置
 * @param {*} inEnd 中序的结束位置
 */
function creator(preorder, inorder, preStart, inStart, inEnd) {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
        return null;
    }

    const root = preorder[preStart];
    const index = inorder.indexOf(root);
    const rootNode = new TreeNode(root);
    rootNode.left = creator(preorder, inorder, preStart + 1, inStart, index - 1);
    rootNode.right = creator(preorder, inorder, preStart + 1 + index - inStart, index + 1, inEnd);

    return rootNode;
}
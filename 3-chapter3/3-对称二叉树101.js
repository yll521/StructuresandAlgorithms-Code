/*********************
给定一个二叉树，检查它是否是镜像对称的。

exp:
1\[1,2,2,3,4,4,3]
    1
   / \
  2   2
 / \ / \
3  4 4  3
是镜像对称
2、[1,2,2,null,3,null,3]
    1
   / \
  2   2
   \   \
   3    3
非镜像对称
迭代和递归两种方法解决
**********************/
/*****
 * 思路:
 *      层序遍历,可以拿到每一层的数据
 *      然后问题转换为判断每一层的数据 是否为回文
 */
// [1,2,2,null,3,null,3]
let root = null;
function TreeNode(val){ 
    this.val = val;
    this.left = this.right = null;
}

// root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(2);
// root.left.left = new TreeNode(null);
// root.left.right = new TreeNode(3);
// root.right.left = new TreeNode(null);
// root.right.right = new TreeNode(3);
// 为什么本地调试可以过这个例子 提交却不能
// console.log(isSymmetric(root));

//  有点问题
function isSymmetric(root){
    if(!root) return true;
    let result =  true;
    isSymmetricCall([root]);
    return result;
    function isSymmetricCall(nodes){
        if(!nodes.length){
            return;
        }
        let 
            pLeft = 0,
            pRight = nodes.length-1,
            nextNodes = [];
        // 判断是否为回文
        while(pLeft<=pRight){
            // 万一其中一个没有值 是null节点 无法读出val
            // if(nodes[pLeft].val!=nodes[pRight].val){
            //     result = false;
            //     break;
            // }
            if((nodes[pLeft]&&nodes[pRight])&&nodes[pLeft].val!==nodes[pRight].val){
                result = false;
                break;
            }
            // 两个节点其中一个没有值(两个都有为空节点是属于对称范围的)
            else if((nodes[pLeft]&&!nodes[pRight])||(!nodes[pLeft]&&nodes[pRight])){
                result = false;
                break;
            }
            pLeft++;
            pRight--;
        }
        // 生成下一个nodes
        nodes.forEach(node => {
            node&&nextNodes.push(node.left)
            node&&nextNodes.push(node.right)            
        });
        // 当前树是否为对称，
        // 1.当前层已经检测出来了非对称则无需递归下去了
        // 2.当前层回文但是有可能下层是非对称的 
        // 涉及到深层更新本层 返回值的问题==-> 全局变量修正
        if(result){
            isSymmetricCall(nextNodes)
        }
    }
}

// 上面的思想大致对了的 (没找到编译出错原因)
// 迭代优化
function isSymmetric(root){
    if(!root){
        return true
    }
    let nodes = [root];
    while(nodes.length){
        let 
            pLeft = 0,
            pRight = nodes.length-1;
        while(pLeft<pRight){
            // 两节点都有值 则判断val是否相等
            if((nodes[pLeft]&&nodes[pRight])&&nodes[pLeft].val!==nodes[pRight].val){
                return false
            }
            // 两个节点其中一个没有值(两个都有为空节点是属于对称范围的)
            else if((nodes[pLeft]&&!nodes[pRight])||(!nodes[pLeft]&&nodes[pRight])){
                return false
            }
            pLeft++;
            pRight--;
        }
        let len  = nodes.length;
        let nextNodes = [];//下一层的
        while(len--){
            //在本层节点从左到右取出节点
            let node = nodes.shift();
            node&&nextNodes.push(node.left);
            node&&nextNodes.push(node.right);
        }
        nodes = nextNodes;
    }
    return true;
}


/***
 * 除了层序遍历回文的方法
 * 分析：
 *      判断二叉树是否镜像对称，转换为左子树与右子树是否镜像对称
 * ==->
 *       3        3 
 *      / \      / \
 *     2   1    1   2
 *    / \ / \  / \ / \
 *   3  4 5 6  6 5 4  3
 * 单位由以前的层，变为树
 * 以3为根节点这两棵大树 是否对称 
 * 1、当前树的考虑:
 *  3 = 3 当前比较的这两个点 val一致
 * 2、子树：
 *  3(左)节点的左子节点应该与右节点的右子节点相等(划分)
 *  左子节点的右子节点应该与右节点的左子节点相等
 *  同样划分下去就是 2的左右子节点的比较
 */
function isSymmetric(root){
    if(!root){
        return true;
    }
    return isSymmetricCall(root.left,root.right);
    function isSymmetricCall(nodeL,nodeR){
        if(!nodeL&&!nodeR){
            return true;
        }
        if(!nodeL||!nodeR){
            return false;
        }
        return nodeL.val == nodeR.val
            && isSymmetricCall(nodeL.left,nodeR.right)
            && isSymmetricCall(nodeL.right,nodeR.left);
    }
}


/****
 * 扩展：
 *      这道题和 100 相同的树很相似
 *      只是这个是判断对称的树是否相同
 */

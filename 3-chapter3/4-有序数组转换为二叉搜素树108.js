/*********************
将有序数组转换为二叉搜索树
exp:
input:
 [-10,-3,0,5,9],

output:
      0
     / \
   -3   9
   /   /
 -10  5
**********************/
/****
 * 思考：
 *  二叉树搜索树：左<中<右
 *  数组是有序的，那么对于树来说 root就是中间数 向上取整
 *  每次划分数组 一个数组划分成两个
 */
function TreeNode(val){
    this.val = val
    this.left = this.right = null;
}

console.log(sortedArrayToBST([-10,-3,0,5,9]))

function sortedArrayToBST(nums){
    if(nums.length==0){
        return null;
    }
    let mid = Math.floor(nums.length/2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0,mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));
    return root;
}

/***
 * 每次传入的是数组
 * 改进：
 *      公用一个数组，传入角标
 */

function sortedArrayToBST(nums){
    if(nums.length==0||nums==null){
        return null;
    }
    return sortedArrayToBSTCall(nums,0,nums.length-1);
    function sortedArrayToBSTCall(arr,left,right){
        if(left>right){
            return null
        }
        if(left==right){
            return new TreeNode(arr[left]);
        }
        let mid = ~~((left+right)/2);
        let root = new TreeNode(arr[mid]);
        root.left = sortedArrayToBSTCall(arr,left,mid-1);
        root.right = sortedArrayToBSTCall(arr,mid+1,right);
        return root;
    }
}
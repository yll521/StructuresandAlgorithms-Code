/*********************
    倒着开始数，有个前提是知道链尾
    所以利用两次遍历 一次知道链长度 一次寻找倒数index
    思路：
        1、全局维护一个count
        递归的终点是head.next==null 此时在链尾 所以递归的basecase设定在这里
        然后从链头递归深入到链尾，到达basecase之后开始回溯
        回溯的时候count++ 当count==n的时候 即走到了倒数第n个节点的前一个节点
        (count从0开始加)
**********************/
function removeNthFromEnd(head,n){
    return removeNthFromEndCall(head,n,0);
    function removeNthFromEndCall(head,n,count){
        if(head.next!=null){
            count = removeNthFromEndCall(head.next,n,count);
        }
        if(count==n){
            head.next = head.next.next;
        }
        return ++count;
    }
}
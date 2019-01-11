/*********************
合并有序链表
递归思路：
    找到重复的步骤(可提炼为递归部分代码的)
    1、比较大小、
    2、比较大小后能确定的是 l1.val<l2.val
       那么接下来确定的是 l1.next与l2
**********************/
function mergeTwoList(l1,l2){
    if(l1==null) return l2;
    if(l2==null) return l1;
    
    if(l1.val<l2.val){
        l1.next = mergeTwoList(l1.next,l2);
        return l1;
    }else{
        l2.next = mergeTwoList(l1,l2.next);
        return l2;
    }
}
/*********************
    1-2-3-4-5-null 反转链表
    
**********************/

function reverseList(head){
    // 1->2->3->null 假如现在满足返回的条件 此时head.next==null head即为3 
    if(head==null||head.next==null){//head.next为递归base
        return head;
    }
    // 一直递归到原链尾 返回的newHead是3 传入的head.next是3，即head为2
    let newHead = reverseList2(head.next);
    // 从原链尾反指向 head.next(3).next = 2
    head.next.next = head;
    // 断开链接 不然要形成环
    head.next = null;
    return newHead;// 新链表头永远指向的是原链表的链尾
}
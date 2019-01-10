/*********************

有序数组array中二分查找
找到返回数组下标

**********************/

function binarySearch(arr,key){
    if(arr===null||arr.length<1){
        return null;
    }
    return binarySearchCall(arr,key,0,arr.length-1)
    function binarySearchCall(arr,key,left,right){
        if(start>end){
            return -1;
        }
        let mid = ~~(start - end)/2 + start;
        if(key === arr[mid]){
            return mid;
        }else if(key > arr[mid]){
            return binarySearchCall(arr,key,mid+1,end);
        }else{
            return binarySearchCall(arr,key,mid,mid-1);
        }
    }
}
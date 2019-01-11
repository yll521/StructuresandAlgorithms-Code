/*********************
归并：
    分治的时候
**********************/
let arr = [3,4,1,2,7,5];
mergeSort(arr)
console.log(arr)
function mergeSort(arr) {
    if (arr === null || arr.length < 2) {
        return;
    }
    mergeSortCal(arr, 0, arr.length-1);
}

function mergeSortCal(arr, left, right) {
    if (left === right) {
        return;
    }
    let mid = left + ((right - left) >> 1); // 位运算效率大于符号运算
    mergeSortCal(arr, left, mid);
    mergeSortCal(arr, mid + 1, right);
    // 合并
    merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
    let
        temp = [],
        i = 0,
        p1 = left,
        p2 = mid + 1;
    while (p1 <= mid && p2 <= right) {
        temp[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
    }
    while (p1 <= mid) {
        temp[i++] = arr[p1++];
    }
    while (p2 <= right) {
        temp[i++] = arr[p2++];
    }
    for (let i = 0; i < temp.length; i++) {
        arr[left + i] = temp[i];
    }
}
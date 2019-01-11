/*********************
快排
    划分、基准值
**********************/
let arr = [3,4,1,2,7,5];
quickSort(arr)
console.log(arr)
function quickSort(arr){
    if(arr==null||arr.length<1){
        return arr;
    }
    return quickSortCall(arr,0,arr.length-1);
    function quickSortCall(arr,left,right){
        if(left<right){
            let p = partition(arr,left,right);
            quickSortCall(arr,left,p-1);
            quickSortCall(arr,p+1,right);
        }
    }

    function partition(arr,left,right){
        if(left>right) return;
        // 每次取数组最右边的数作为基准值
        let 
            data = arr[right],
            bounder = left-1;
        for(let i=left;i<=right;i++){
            if(arr[i]<=data){
                // 和bounder右边的数交换 并扩大区域
                swap(arr,++bounder,i)
            }
        }
        return bounder;
    }
    function swap(arr,l,r){
        // let temp = arr[l];
        // arr[l] = arr[r];
        // arr[r] = temp;
        [arr[l],arr[r]] = [arr[r],arr[l]];
    }
}
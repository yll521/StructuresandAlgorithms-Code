/*********************
给定n 求出1*2*3*4*5*6....n的值
**********************/
console.log(getFactorial(1))
function getFactorial(n){
    if(n==0){
        return 1;// 0!=1
    }else{
        return getFactorial(n-1) * n;
    }
}

/****
 * 其他思路：
 *      遍历 n 一个sum全局变量
 */
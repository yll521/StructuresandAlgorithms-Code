/*********************
求一个整数的乘方
function(num,power) 数、乘方
2^3 = 8 2^1=2;
2^3 = 2*2*2 记录乘的次数

**********************/
console.log(getPower(4,2))
function getPower(num,power){
    if(power==0){
        return 1;
    }else{
        //power--;
        return num * getPower(num,--power);
    }
}
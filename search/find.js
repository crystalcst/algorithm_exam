// 顺序查找
function seqSearch(arr,data){
    for(var i=0;i<arr.length;i++){
        if(arr[i] == data){
            return i;
        }
    }
    return -1;
}

function findMax(arr){
    var max = arr[0];
    for(var i=0;i<arr.length;i++) {
        if(arr[i]>max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    var min = arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<min) {
            min = arr[i];
        }
    }
    return min;
}

//自组织数据
function swap(arr,index1,index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function seqSearchAuto(arr,data) {
    for(var i=0;i<arr.length;i++){
        if(arr[i] == data && i>(arr.length*0.2)){
            swap(arr,i,i-1);
            return true;
        }
    }
    return -1;
}




var arr = [23,100,56,78,32];
alert(seqSearch(arr,100));  // 1
alert(findMax(arr));  // 100
alert(findMin(arr));  // 23
seqSearchAuto(arr,56);
seqSearchAuto(arr,56);
seqSearchAuto(arr,56);
seqSearchAuto(arr,32);
seqSearchAuto(arr,32);
console.log(arr);
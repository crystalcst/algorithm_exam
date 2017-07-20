//选择排序算法：依次比较i之后的数与第i个数的大小，符合条件交换位置
function selectionSort(arr) {
    var len = arr.length;
    var temp;
    for(var i = 0;i < len;i++) {
        for(var j = i+1;j < len;j++) {
            if(arr[j]<arr[i]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

selectionSort([4,2,7,8,23,45,767,89,1,2,5,3,67]);

                                        //插入排序算法：比较当前位置与前一个的大小
function insertionSort(arr) {
  var len = arr.length;
  var temp;
  for(var i=1;i<len;i++) {
    for(var j=i;j>0 && arr[j]<arr[j-1];j--) {
        temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
    }
  }
  return arr;
}

console.log(insertionSort([1,23,3,5,7,4,13,675,34,24]));

//插入排序算法改进：比较，当arr[j-1]>arr[i]时候,赋值到当前j的位置，结束时候把副本的值赋值给arr[j]
function insertionSortUpadate(arr) {
    var len = arr.length;
    for(var i = 1;i < len; i++) {
        var copy = arr[i];
        for(var j = i; j>0 && arr[j-1]>copy;j--) {
            arr[j] = arr[j-1];
        }
        arr[j] = copy;
    }
    return arr;
}
console.log(insertionSortUpadate([1,23,3,5,7,4,13,675,34,24]));
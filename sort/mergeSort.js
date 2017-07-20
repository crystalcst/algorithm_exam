function mergeSort(arr){
	var len = arr.length;
	if(len<2){
		return arr;
	}
	var middle = Math.floor(len/2),//将无序数组划分为两个数组
		left = arr.slice(0,middle),
		right = arr.slice(middle);
		return merge(mergeSort(left),mergeSort(right));//递归，对左右两部分进行排序合并
}

function merge(left,right){
	var result = [];
	while(left.length>0 && right.length > 0) {
		if(left[0]<right[0]){
			result.push(left.shift());
		}else {
			result.push(right.shift());
		}
	}
	// 当左右数组长度不相等，将比较后剩余的项连接起来
	return result.concat(left).concat(right);
}

var a = [23,4,78,45,12,0,23,1,52];
console.log(mergeSort(a));
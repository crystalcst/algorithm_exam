// 贪心算法的找零操作：50块，10块，5块，1块
function makeChange(originRmb,coins) {
    var remainRmb = 0;
    if (originRmb % 50 < originRmb ){
        coins[3] = parseInt(originRmb%50,10);
        remainRmb = originRmb%50;
        originRmb = remainRmb;
    }
    if(originRmb % 10 < originRmb){
        coins[2] = parseInt(originRmb%10,10);
        remainRmb = originRmb%10;
        originRmb = remainRmb;
    }
    if(originRmb % 5 < originRmb){
        coins[1] = parseInt(originRmb%5,10);
        remainRmb = originRmb%5;
        originRmb = remainRmb;
    }
    coins[0] = originRmb%1;
}

var originRmb = 98;
var coins = [];
makeChange(originRmb,coins);
if(coins[3]>0){
    console.log("继续使用10块钱");
}
if(coins[2]>0){
    console.log("继续使用5块钱");
}
if(coins[1]>0){
    console.log("继续使用1块钱");
}
if(coins[0] == 0){
    console.log("找完了");
}
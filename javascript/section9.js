/** Section9 **/
console.log("/** Section9 **/");

// for文
for(var i = 1; i <= 3; i++){
  console.log(i);
}

// while文
var i = 1;
while(i <= 3){
  console.log(i);
  i++;
}

// do while文
var i = 1;
do{
  console.log(i);
  i++;
} while(i <= 3);

// 1~100の整数かつ偶数の値について、合計値をコンソールに出力
// for文使用
var sum = 0;
calcSum();
function calcSum(){
  for (var i = 1; i <= 100; i++){
    if(i%2 == 0){
      sum += i;
    }
  }
  console.log(sum);
}

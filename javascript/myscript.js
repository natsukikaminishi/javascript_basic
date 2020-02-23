/** section10 **/
console.log("/** Section10 **/");

// 配列
var colors = ['Red', 'Green', 'Blue', 10];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]); // undefined

// 連想配列
var user = {name:'山田花子', gendar:'F', birth:'1990-01-01'};
console.log(user.name);
console.log(user['birth']);

// テストの点数の合計値、平均値を求めるプログラム
// スコアは、100,90,80,70,60
var scores = [100, 90, 80, 70, 60];
var sum = 0;
var average = 0;
calc();
function calc(){
  for(var i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  average = sum / scores.length;
  console.log(sum);
  console.log(average);
}

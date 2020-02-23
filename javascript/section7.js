/** Section7 **/
console.log("/** Section7 **/");

// 変数xが100以上だったら、100以上です とコンソールに表示
// そうでない場合、100未満です と表示
var x = 100;
judge(x);
function judge(x){
    if(x >= 100){
      console.log('100以上です。')
    } else {
      console.log('100未満です。')
    }
}

var y = 99;
judge(y);

// テストの点数によって、通知表の成績を出力する
// 90以上 A, 80以上 B, 60以上 C, 60未満 D;
var x = 80;
judgTest(x);
var y = 70;
judgTest(y);
var z = 59;
judgTest(z);
judgTest(null); // D

function judgTest(x){
    if(x >= 90){
      console.log('A');
    } else if(x >= 80) {
      console.log('B')
    } else if (x >= 60) {
      console.log('C');
    } else {
      console.log('D');
    }
}

// switch文法
// 変数nが1だったら「数値は1です。」とコンソールに表示（1～3まで、それ以外は、範囲外と表示）

var n = 2;
judgeNum(n);
var m;
judgeNum(m);
function judgeNum(n){
  switch (n) {
    case 1:
      console.log('数値は1です。');
      break;
    case 2:
      console.log('数値は2です。');
      break;
    case 3:
      console.log('数値は3です。');
      break;
    default:
      console.log('範囲外です。');
      break; // 任意
  }
}

// 年齢によって、テーマパークの入場料を出し分けて出力
// 6才未満 800円, 12才未満 1,800円, 12才以上 4,600円

var age1 = 8;
calcPriceFromAge(age1);
var age2;
calcPriceFromAge(age2);
function calcPriceFromAge(age){
  if(age < 6){
    console.log('800円');
  } else if(age < 12){
    console.log('1,800円')
  } else if (age >= 12){
    console.log('4,600円');
  } else {
    console.log('引数が数字ではありません。');
  }
}

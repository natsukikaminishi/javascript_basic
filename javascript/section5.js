/** Section5 **/
console.log("/** Section5 **/");

// 1.消費税率を格納する定数TAX_RATEを宣言し、初期値1.08をセット
// 2.コンソールにTAX_RATEの値を出力
const TAX_RATE = 1.08;
console.log(TAX_RATE);

console.log(10);
console.log("She's happy.");

// null
var x = null;
console.log(x);

// undifined
var y;
console.log(y);

// 足し算
console.log(10 + 3);
// 引き算
console.log(10 - 3);
// 掛け算
console.log(10 * 3);
// 割り算
console.log(10 / 3);
// 余り
console.log(10 % 3);

// 後置演算
var x = 10;
var y = x++;
console.log(x);
console.log(y);

// 前置演算
var x = 10;
var y = ++x;
console.log(x);
console.log(y);

// =
x = 3;

// +=
x += 3;// x = x + 3;
console.log(x);
// -=
x -= 3;// x = x -3;
console.log(x);
// *=
x *= 3;// x = x * 3;
console.log(x);
// /=
x /= 3;// x = x / 3;
console.log(x);
// %=
x %= 3;// x = x %3;
console.log(x);

// [スーパーでみかんの合計金額を計算するプログラム]
// 100円のみかんを13個（消費税計算考慮不要）
var mikan_price = 100;
var total_price_mikan = mikan_price * 13;
console.log(total_price_mikan);

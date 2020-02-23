/** Section8 **/
console.log("/** Section8 **/");

// Numver Objectの使用例
var n = 255;
var m = 1234.543;
console.log(n.toString(16)); // 数値(255)を16進数で表記
console.log(n.toExponential()); // 指数で表記
console.log(m.toFixed(2)); // 固定小数点表記
console.log(m.toPrecision(5)); // 桁数に変換し表示

// String Objectの使用例
var x = 'こんにちは';
  var y = 'red,green,blue';
console.log(x.length); // 長さを抽出 length()でないので注意
console.log(x.charAt(2)); // 指定桁数文字抽出(+1して抽出される)
console.log(y.split(',')); // 文字分割

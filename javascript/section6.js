/** Section6 **/
console.log("/** Section6 **/");

// function関数
// 四角形の面積計算
function getRectangle(height, width) {
    return height * width;
}

console.log(getRectangle(3,5));

// 関数リテラル, 匿名関数, 無名関数
var getRectangle = function(height, width) {
    return height * width;
}

console.log(getRectangle(3,5));

// functionコンストラクター
var getRectangle = new Function('height', 'width', 'return height * width');
console.log(getRectangle(3,5));

// [スーパーでみかんの合計金額を計算するプログラム]
// 100円のみかんを13個（消費税計算考慮不要）
function getTotalPrice(price, num) {
  return price * num;
}

console.log(getTotalPrice(100, 13));

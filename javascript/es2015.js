/** es2015 **/
console.log("/** es2015 **/");

// var
var i = 10;
i = 11;
var i = 12;

// let(再宣言NG, 再代入OK)
// let j = 10;
// j = 11;
// let j = 12;

// const(再宣言NG, 再代入NG)
const tax_rate = 0.08;
// tax_rate = 0.10;
// const tax_rate = 0.20;

// 従来の関数
let f = function(x,y){
  return x * y;
}
console.log(f(2,3));

// アロー関数
let l = (x,y) => {
  return x * y;
}
console.log(l(2,3));

// アロー関数
let n = x => {
  return x + 1;
}
console.log(n(5));

// アロー関数
let m = () => {
  console.log('test');
}

// クラス
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayName() {
    console.log(this.firstName + ' ' + this.lastName);
  }
}

let user = new User('Taro', 'Yamada');
user.sayName();

// シンボル
let sym1 = Symbol('foo');
let sym2 = Symbol('foo');

console.log(typeof sym1);
console.log(sym1.toString());
console.log(sym1 === sym2);

// 分割代入
let a, b, other;
[a,b] = [1,2];
console.log(a);
console.log(b);

[c, d, ...other] = [1,2,3,4,5];
console.log(a);
console.log(b);
console.log(other); //[3,4,5]

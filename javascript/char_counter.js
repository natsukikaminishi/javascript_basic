(function(){// 即時関数
  'user strict'; // strictモード(厳格モード)
  // id =input_textのエレメントを取得
  var e = document.getElementById('input_text');
  document.getElementById('char_count').innerHTML = '10';

  // keyupのイベント発生時に、入力文字数をコンソールに出力
  e.addEventListener('keyup', function(){
    // console.log(e.value);
    // console.log(e.value.length);
    var str = e.value;
    // 改行の削除
    str = str.replace(/\r?\n/g,'');
    console.log(str.length);

    var remainig = 10 - str.length;

    document.getElementById('char_count').innerHTML = remainig;

    if(remainig >= 0) {
      document.getElementById('char_count_wrap').style.color = 'black';
    } else {
      document.getElementById('char_count_wrap').style.color = 'red';
    }
  });
})();

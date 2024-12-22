'use strict';
// ローカルストレージからデータを取得
let data = localStorage.getItem('key');
// 入力プロンプト表示
let input_data = window.prompt('現在のデータ：' + data);
// 入力プロンプトでOKが押された場合
if(input_data != null) {
    // ローカルストレージにユーザ名を保存
    localStorage.setItem('key', input_data);
}
if(input_data.toLowerCase() == "del"){
    localStorage.removeItem('key');
}
// コンテンツの書き換え
document.getElementById('data').textContent = localStorage.getItem('key');

'use strict';
// ローカルストレージからユーザ名を取得
let value = localStorage.getItem('username');
// ローカルストレージに値が格納されていなければ入力
if (value == null)  {
    let input = window.prompt('ユーザ名を入力してください。')
    if (input == null || input == '') {
        input = '名無し';
    }
    value = input;
}
// id=usernameの要素にユーザ名を設定
document.getElementById('username').textContent = value;
// ローカルストレージからユーザ名を保存
localStorage.setItem('username', value);
'use strict';
$(document).ready(function() {
    $('.logout').on('click', function(){
        document.getElementById('username').textContent = "";
        // Delay入れると良い。
        localStorage.removeItem('username');
        alert('ログアウトしました');
    });
});
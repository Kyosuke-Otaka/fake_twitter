'use strict';
$(document).ready(function () {
    //ファイルの読み込み
    $.ajax({ 
        url: 'data.json', datatype: 'json'
    })
    .done(function (data) {
        data.forEach(function (item, index) {
            if (item.crowded === 'yes') {
                const idName = '#' + item.id;
                $(idName).find('.check').addClass('crowded');
            }
        });
    })
    .fail(function () {
        window.alert('読み込みエラー');
    });

    //クリックされたら空き席状況を表示
    $('.check').on('click', function () {
        if ($(this).hasClass('crowded')) {
            $(this).text('残席わずか').addClass('red');
        } else {
            $(this).text('お席あります').addClass('green');
        }
    });
});
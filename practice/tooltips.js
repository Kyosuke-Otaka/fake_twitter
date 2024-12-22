'use strict'
$(function () {
    const title = "ドロップダウンメニュー2";
    $("#icon1").attr('title',title);
    $('[data-toggle="tooltip"]').tooltip();
    
    $('.dropdown-item').on('mouseover',function () {
        const title = $(this).text();
        $(this).attr('title',title);
        $(this).tooltip();
    });
});
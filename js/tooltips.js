'use strict'
$(function () {
    const value = localStorage.getItem('username');
    $("#icon1").attr('title',value);
    $('[data-toggle="tooltip"]').tooltip();
    
    $('.dropdown-item').on('mouseover',function () {
        const title = $(this).text();
        $(this).attr('title',title);
        $(this).tooltip();
    });
});
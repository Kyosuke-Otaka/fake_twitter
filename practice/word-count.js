/**
 * https://techacademy.jp/magazine/24324
 */
'use strict';
$(function() {
    $(".count").text(0);
    $('#word').on('input', function() {
        const count = $('#word').val().length;
        $(".count").text(count);
    });
});
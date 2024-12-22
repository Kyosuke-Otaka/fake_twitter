'use strict';
$(function () {
    const countMax = 120;
    $(".count").text(countMax);
    $('#message').on('keydown keyup keypress change', function () {
        const thisValueLength = $(this).val().length;
        const countDown = countMax - thisValueLength;
        $(".count").text(countDown);
    })
})
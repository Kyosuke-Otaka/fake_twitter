'use strict';
$(function () {
    $('#message').on('keydown keyup keypress chage', function () {
        const input = $(this).val();
        if(input) {
            // 入力在り
            $('#send-btn').prop("disabled", false);
        }else{
            // 入力無し
            $('#send-btn').prop("disabled", true);
        }
    })
})
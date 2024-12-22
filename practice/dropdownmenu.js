'use strict';
$(document).ready(function() {
    $('.dropdown-item').on('click', function(){
        alert($(this).text() + "が選択されました");
    });
});
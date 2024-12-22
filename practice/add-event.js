'use strict';
$(function () {
    $('body').on('click','.delete', function () {
        const result = window.confirm("削除しますか？");
        if (result) {
            $(this).parent().remove();
        }
    });
});

'use strict'
function ajaxCovit19Request() {
    const url = "https://covid19-japan-web-api.vercel.app/api/v1/prefectures";
    $.ajax({
        url: url,
        dataType: 'json'
    }).done(function (data) {
            console.log(data);
            const covid_obj = JSON.parse(JSON.stringify(data));
            const covid_cases = covid_obj[0].cases;
            console.log(covid_cases);
            document.getElementById('covid19').textContent = covid_cases;
        })
        .fail(function () {
            console.log("ajax failed!");
        })
}
$(function(){
    ajaxCovit19Request();
})
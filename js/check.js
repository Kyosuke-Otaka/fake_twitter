function send_btn(){
    let textarea = document.getElementById("message").value;
    if(textarea == null || textarea == '') {
        alert('メッセージが未入力です');
        return false;
    }
    return true;
}
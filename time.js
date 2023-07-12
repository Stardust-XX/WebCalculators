var t = null;
t = setTimeout(time, 1);
function time() {
    clearTimeout(t);
    date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    document.getElementById("time").innerHTML = year + "年" + month + "月" + day + "日" + hours + "时" + minutes + "分" + seconds + "秒";
    t = setTimeout(time, 1000);
}
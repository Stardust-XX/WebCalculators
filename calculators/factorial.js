function show(){
    var n = parseFloat(document.getElementById("text").value);
    var i,j = 1;
    if (n<0||n%1!=0){
        alert("请输入非负整数！");
    } else {
        if (n<=1){
            document.getElementById("answer").innerHTML="数字"+n+"的阶乘为1";
        } else {
            for (i=1;i<=n;i++){
                j=j*i;
            }
            document.getElementById("answer").innerHTML="数字"+n+"的阶乘为"+j;
        }
    }
}
function clearInput(){
    document.getElementById("text").value=""
}
function clearAnswer() {
    document.getElementById("answer").innerHTML="";
}
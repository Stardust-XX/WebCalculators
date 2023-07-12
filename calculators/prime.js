function show(){
    var n = parseFloat(document.getElementById("text").value);
    if (n<=0||n%1!=0){
        alert("请输入正整数！");
    } else {
        if (isPrime(n)){
            document.getElementById("answer").innerHTML="数字"+n+"是质数";
        } else {
            document.getElementById("answer").innerHTML="数字"+n+"不是质数";
        }
    }
}
function isPrime(n){
    if(n<=3){
        return n > 1;
    }
    for (var i=2;i<=Math.sqrt(n);i++){
        if (n%i==0){
            return false;
        }
    }
    return true;
}
function clearInput(){
    document.getElementById("text").value=""
}
function clearAnswer() {
    document.getElementById("answer").innerHTML="";
}
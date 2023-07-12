function show(){
    var n=parseFloat(document.getElementById("text").value);
    if (n<0||n%1!=0){
        alert("请输入非负整数");
    }else {
        document.getElementById("answer").innerHTML="斐波那契数列的第"+n+"项为"+fib(n);
    }
}
function fib(n){
    if (n==0){
        return 0
    }else if (n==1||n==2){
        return 1;
    }else {
        var f1=1;
        var f2=1;
        var f3=-1;
        for (var i=3;i<=n;i++){
            f3=f1+f2;
            f1=f2;
            f2=f3;
        }
        return f3;
    }
}
function clearInput(){
    document.getElementById("text").value=""
}
function clearAnswer() {
    document.getElementById("answer").innerHTML="";
}
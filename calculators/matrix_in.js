function clearMat(){
    for (var i=1;i<=2;i++){
        for (var j=1;j<=2;j++){
            document.getElementById("a"+i.toString()+j.toString()).value="";
            document.getElementById("b"+i.toString()+j.toString()).value="";
        }
    }
}
function show(){
    for (var i=1;i<=2;i++){
        for (var j=1;j<=2;j++){
            eval("var a"+i+j+"="+parseFloat(document.getElementById("a"+i.toString()+j.toString()).value));
        }
    }
    var n = 1/(a11*a22-a12*a21);
    var k = 0;
    for (var x=1;x<=2;x++){
        for (var y=1;y<=2;y++){
            k=k+isNaN(eval("a"+x+y));
        }
    }
    if (k!=0){
        alert("不能为空！");
    }else{
        document.getElementById("b11").value=n*a22;
        document.getElementById("b12").value=-n*a12;
        document.getElementById("b21").value=-n*a21;
        document.getElementById("b22").value=n*a11;
    }

}
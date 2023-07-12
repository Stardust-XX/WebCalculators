function clearMat(){
    for (var i=1;i<=2;i++){
        for (var j=1;j<=2;j++){
            document.getElementById("a"+i.toString()+j.toString()).value="";
            document.getElementById("b"+i.toString()+j.toString()).value="";
            document.getElementById("c"+i.toString()+j.toString()).value="";
        }
    }
}
function show(){
    for (var i=1;i<=2;i++){
        for (var j=1;j<=2;j++){
            eval("var a"+i+j+"="+parseInt(document.getElementById("a"+i.toString()+j.toString()).value))
            eval("var b"+i+j+"="+parseInt(document.getElementById("b"+i.toString()+j.toString()).value))
        }
    }
    if ((isNaN(a11)+isNaN(b11)+isNaN(a12)+isNaN(b12)+isNaN(a21)+isNaN(b21)+isNaN(a22)+isNaN(b22))!=0){
        alert("不能为空！");
    } else {
            document.getElementById("c11").value = a11 + b11;
            document.getElementById("c12").value = a12 + b12;
            document.getElementById("c21").value = a21 + b21;
            document.getElementById("c22").value = a22 + b22;
    }
}
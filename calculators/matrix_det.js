function clearMat(){
    for (var i=1;i<=3;i++){
        for (var j=1;j<=3;j++){
            document.getElementById("a"+i.toString()+j.toString()).value="";
        }
    }
}
function clearAnswer(){
    document.getElementById("answer").innerHTML="";
}

function show(){
    for (var i=1;i<=3;i++){
        for (var j=1;j<=3;j++){
            eval("var a"+i+j+"="+parseFloat(document.getElementById("a"+i.toString()+j.toString()).value));
        }
    }
    if (isNaN(a11)+isNaN(a12)+isNaN(a13)+isNaN(a21)+isNaN(a22)+isNaN(a23)+isNaN(a31)+isNaN(a32)+isNaN(a33)!=0){
        alert("不能为空！")
    }else {
        document.getElementById("answer").innerHTML="该矩阵的行列式为"+(a11*a22*a33+a21*a32*a13+a31*a12*a23-a31*a22*a13-a21*a12*a33-a11*a32*a23);
    }
}
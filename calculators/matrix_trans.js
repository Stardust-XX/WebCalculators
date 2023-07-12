function clearMat(){
    for (var i=1;i<=3;i++){
        for (var j=1;j<=3;j++){
            document.getElementById("a"+i.toString()+j.toString()).value="";
            document.getElementById("b"+i.toString()+j.toString()).value="";
        }
    }
}
function show(){
    for (var i=1;i<=3;i++){
        for (var j=1;j<=3;j++){
            eval("var a"+i+j+"="+parseFloat(document.getElementById("a"+i.toString()+j.toString()).value));
        }
    }
    var k = 0;
    for (var x=1;x<=3;x++){
        for (var y=1;y<=3;y++){
            k=k+isNaN(eval("a"+x+y));
        }
    }
    if (k!=0){
        alert("不能为空！");
    }else {
        for (var p=1;p<=3;p++){
            for (var q=1;q<=3;q++){
                document.getElementById("b"+p.toString()+q.toString()).value=eval("a"+q+p);
            }
        }
    }
}
function show() {
    var A = parseFloat(document.getElementById("A").value);
    var C = parseFloat(document.getElementById("C").value);
    var d = parseFloat(document.getElementById("d").value);
    var r = parseFloat(document.getElementById("r").value);
    if (isNaN(A)&&isNaN(C)&&isNaN(d)&&isNaN(r)){
        alert("请输入！");
    }
    if (!isNaN(A)){
        document.getElementById("answer").innerHTML=
            "半径r="+Math.sqrt(A/Math.PI)+"<br>"+
            "直径d="+2*Math.sqrt(A/Math.PI)+"<br>"+
            "周长C="+2*Math.sqrt(A/Math.PI)*Math.PI;
    }
    if (!isNaN(C)){
        document.getElementById("answer").innerHTML=
            "直径d="+C/Math.PI+"<br>"+
            "半径r="+C/Math.PI/2+"<br>"+
            "面积A=="+Math.PI*Math.pow(C/Math.PI/2,2) +"<br>"
    }
    if (!isNaN(d)){
        document.getElementById("answer").innerHTML=
            "半径r="+d/2+"<br>"+
            "周长C="+Math.PI*d+"<br>"+
            "面积A=="+Math.PI*Math.pow(d/2,2) +"<br>"
    }
    if (!isNaN(r)){
        document.getElementById("answer").innerHTML=
            "直径d="+r*2+"<br>"+
            "周长C="+Math.PI*r*2+"<br>"+
            "面积A=="+Math.PI*Math.pow(r,2) +"<br>"
    }
}
function clearInput(x){
    if (x==A){
        document.getElementById("C").value="";
        document.getElementById("d").value="";
        document.getElementById("r").value="";
    } else if (x==C){
        document.getElementById("A").value="";
        document.getElementById("d").value="";
        document.getElementById("r").value="";
    } else if (x==d){
        document.getElementById("A").value="";
        document.getElementById("C").value="";
        document.getElementById("r").value="";
    } else if (x==r){
        document.getElementById("A").value="";
        document.getElementById("C").value="";
        document.getElementById("d").value="";
    } else {
        document.getElementById("A").value="";
        document.getElementById("C").value="";
        document.getElementById("d").value="";
        document.getElementById("r").value="";
    }
}

function clearAnswer() {
    document.getElementById("answer").innerHTML="";
}
S = parseFloat(document.getElementById("S").value);
P = parseFloat(document.getElementById("P").value);
a = parseFloat(document.getElementById("a").value);
b = parseFloat(document.getElementById("b").value);
c = parseFloat(document.getElementById("c").value);
function clearInputS(){
    P = parseFloat(document.getElementById("P").value);
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);

    if (!isNaN(P)){
        document.getElementById("P").value="";
    }
    if(!(isNaN(a)+isNaN(b)+isNaN(c))){
        document.getElementById("a").value="";
        document.getElementById("b").value="";
        document.getElementById("c").value="";
    }
}
function clearInputP(){
    S = parseFloat(document.getElementById("S").value);
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);

    if (!isNaN(S)){
        document.getElementById("S").value="";
    }
    if(!(isNaN(a)+isNaN(b)+isNaN(c))){
        document.getElementById("a").value="";
        document.getElementById("b").value="";
        document.getElementById("c").value="";
    }
}
function clearInputA(){
    S = parseFloat(document.getElementById("S").value);
    P = parseFloat(document.getElementById("P").value);
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);
    if (!(isNaN(b)+isNaN(c))&&(!isNaN(S)||!isNaN(P))){
        document.getElementById("P").value="";
        document.getElementById("S").value="";
        document.getElementById("b").value="";
        document.getElementById("c").value="";
    }
}

function clearInputB(){
    S = parseFloat(document.getElementById("S").value);
    P = parseFloat(document.getElementById("P").value);
    a = parseFloat(document.getElementById("a").value);
    c = parseFloat(document.getElementById("c").value);
    if (!(isNaN(a)+isNaN(c))&&(!isNaN(S)||!isNaN(P))){
        document.getElementById("P").value="";
        document.getElementById("S").value="";
        document.getElementById("a").value="";
        document.getElementById("c").value="";
    }
}

function clearInputC(){
    S = parseFloat(document.getElementById("S").value);
    P = parseFloat(document.getElementById("P").value);
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    if (!(isNaN(a)+isNaN(b))&&(!isNaN(S)||!isNaN(P))){
        document.getElementById("P").value="";
        document.getElementById("S").value="";
        document.getElementById("a").value="";
        document.getElementById("b").value="";
    }
}

function clearInput(){
    document.getElementById("S").value="";
    document.getElementById("P").value="";
    document.getElementById("a").value="";
    document.getElementById("b").value="";
    document.getElementById("c").value="";
}

function clearAnswer() {
    document.getElementById("answer").innerHTML="";
}
function show(){
    S = parseFloat(document.getElementById("S").value);
    P = parseFloat(document.getElementById("P").value);
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);

    if (!isNaN(a)&&!isNaN(b)&&!isNaN(c)){
        if (Math.sqrt((a+b+c)*(-a+b+c)*(a-b+c)*(a+b-c))/4==0){
            alert("输入值冲突")
        }else {
            document.getElementById("answer").innerHTML="周长P="+ (a + b + c) +
                "<br>面积S="+Math.sqrt((a+b+c)*(-a+b+c)*(a-b+c)*(a+b-c))/4;
            }
    }
    if (!isNaN(S)&&!isNaN(a)&&!isNaN(b)){
            if (isNaN(Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2)-2*a*b*Math.cos(Math.asin(2*S/(a*b)))))){
                alert("输入值冲突");
            }else {
                document.getElementById("answer").innerHTML= "第三边长l="+Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2)-2*a*b*Math.cos(Math.asin(2*S/(a*b)))) +
                    "<br>周长P="+( Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2)-2*a*b*Math.cos(Math.asin(2*S/(a*b))))+a+b);
            }
    }
    if (!isNaN(S)&&!isNaN(a)&&!isNaN(c)){
        if (isNaN(Math.sqrt(Math.pow(a, 2)+Math.pow(c, 2)-2*a*c*Math.cos(Math.asin(2*S/(a*c)))))){
            alert("输入值冲突");
        }else {
            document.getElementById("answer").innerHTML= "第三边长l="+Math.sqrt(Math.pow(a, 2)+Math.pow(c, 2)-2*a*c*Math.cos(Math.asin(2*S/(a*c)))) +
                "<br>周长P="+( Math.sqrt(Math.pow(a, 2)+Math.pow(c, 2)-2*a*c*Math.cos(Math.asin(2*S/(a*c))))+a+c);
        }
    }
    if (!isNaN(S)&&!isNaN(c)&&!isNaN(b)){
        if (isNaN(Math.sqrt(Math.pow(c, 2)+Math.pow(b, 2)-2*c*b*Math.cos(Math.asin(2*S/(c*b)))))){
            alert("输入值冲突");
        }else {
            document.getElementById("answer").innerHTML= "第三边长l="+Math.sqrt(Math.pow(c, 2)+Math.pow(b, 2)-2*c*b*Math.cos(Math.asin(2*S/(c*b)))) +
                "<br>周长P="+( Math.sqrt(Math.pow(c, 2)+Math.pow(b, 2)-2*c*b*Math.cos(Math.asin(2*S/(c*b))))+c+b);
        }
    }
    if (!isNaN(P)&&!isNaN(a)&&!isNaN(b)){
        if (isNaN(Math.sqrt((P)*(P-2*a)*(P-2*b)*(2*a+2*b-P))/4)){
            alert("输入值冲突");
        }else {
            document.getElementById("answer").innerHTML="第三边长l="+(P-a-b)+
                "<br>面积S=" + Math.sqrt((P)*(P-2*a)*(P-2*b)*(2*a+2*b-P))/4 ;
        }
    }
    if (!isNaN(P)&&!isNaN(a)&&!isNaN(c)){
        if (isNaN(Math.sqrt((P)*(P-2*a)*(P-2*c)*(2*a+2*c-P))/4)){
            alert("输入值冲突");
        }else {
            document.getElementById("answer").innerHTML="第三边长l="+(P-a-c)+
                "<br>面积S=" + Math.sqrt((P)*(P-2*a)*(P-2*c)*(2*a+2*c-P))/4 ;
        }
    }
    if (!isNaN(P)&&!isNaN(c)&&!isNaN(b)){
        if (isNaN(Math.sqrt((P)*(P-2*c)*(P-2*b)*(2*c+2*b-P))/4)){
            alert("输入值冲突");
        }else {
            document.getElementById("answer").innerHTML="第三边长l="+(P-c-b)+
                "<br>面积S=" + Math.sqrt((P)*(P-2*c)*(P-2*b)*(2*c+2*b-P))/4 ;
        }
    }
    if ((isNaN(S)+isNaN(P)+isNaN(a)+isNaN(b)+isNaN(c))>2){
        alert("条件不足");
    }
}
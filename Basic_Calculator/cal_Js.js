function addition(){
    let val1=document.getElementById("num1").value
    let val2=document.getElementById("num2").value
    let answer=parseInt(val1)+parseInt(val2);
    document.getElementById("result").value=answer
    }
function subract(){
    let val1=document.getElementById("num1").value
    let val2=document.getElementById("num2").value
    let answer=parseInt(val1)-parseInt(val2);
    document.getElementById("result").value=answer
    }
function multiply(){
    let val1=document.getElementById("num1").value
    let val2=document.getElementById("num2").value
    let answer=parseInt(val1)*parseInt(val2);
    document.getElementById("result").value=answer
    }
function division(){
    let val1=document.getElementById("num1").value
    let val2=document.getElementById("num2").value
    let answer=parseInt(val1)/parseInt(val2);
    document.getElementById("result").value=answer
    }

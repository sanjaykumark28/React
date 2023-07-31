function add()
{
        let num1 = parseInt(document.getElementById("a1").value);
        let num2 = parseInt(document.getElementById("a2").value);
        let sum=num1+num2;
        document.getElementById("button1").innerHTML = "The addition is:"+sum;
}

function sub() 
{ 
        let num1 = parseInt(document.getElementById("a1").value);
        let num2 = parseInt(document.getElementById("a2").value);
        let sub=num1-num2;
        document.getElementById("b2").innerHTML = "The subtraction is:"+sub;
}

//# fibonacai series

w=document.createElement("Button")
w.setAttribute("onclick","addition();");
w.innerHTML="click Me"
document.body.appendChild(w);

function addition(){
   x=document.createElement("Button");
   x.setAttribute("onclick","single();"); 
   x.innerHTML="start";
   document.body.appendChild(x)
}

function single(){
	var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Enter the number:");
    y.setAttribute("id","n");
    document.body.appendChild(y);

    z=document.createElement("Button");
    z.setAttribute("onclick","run();");
    z.innerHTML="run";
    document.body.appendChild(z)
}

function run()
{
num1 = Number(document.getElementById("n").value);
var number = num1
var n1 = 0, n2 = 1, n3;

document.write("Fibo series of "+number+" "+ "is :"+" " );

for (let i = 1; i <= number; i++) {
    document.write(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}
}



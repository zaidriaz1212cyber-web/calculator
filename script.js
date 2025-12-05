var a = prompt("Enter first number:");
var b = prompt("Enter second number:");
var op = prompt("Enter operator (+, -, *, /):");

 if (isNaN(a) || isNaN(b))
      alert("Ghalat input — dono values numbers honi chahiye.");






a = parseFloat(a);
b = parseFloat(b);
var result;

if (op === "+"){
    result = a + b;
alert("Result: " + result);
}
 else if (op === "-"){
    result = a - b;
alert("Result: " + result);
}
 else if (op === "*"){
    result = a * b;
alert("Result: " + result);
}
 else if (op === "/") {
    if (b === 0) 
        alert("wrong"); }  
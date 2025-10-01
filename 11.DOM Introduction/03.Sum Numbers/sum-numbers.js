function calc()
{
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let sum = Number(n1) + Number(n2);
    document.getElementById("sum").value = sum;
}
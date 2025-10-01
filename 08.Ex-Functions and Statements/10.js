function factorialDivision(num1, num2) 
{
    let factorial1 = 1;
    for (let i = 2; i <= num1; i++) 
        {
        factorial1 *= i;
    }

    let factorial2 = 1;
    for (let i = 2; i <= num2; i++) 
        {
        factorial2 *= i;
    }
    const result = factorial1 / factorial2;
    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);
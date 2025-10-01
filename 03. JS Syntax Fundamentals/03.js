function solve(grade)
{
    if (grade >= 5.50)
    {
        console.log("Excellent");
    } 
    else
    {
        console.log("Not excellent");
    }
}


function monthPrinter(monthNumber) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    if (monthNumber < 1 || monthNumber > 12) {
        console.log("Error!");
    } else {
        console.log(months[monthNumber - 1]);
    }
}

function mathOperations(num1, num2, operator) {
    let result;
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            console.log("Invalid operator!");
            return;
    }
    
    console.log(result);
}

function findLargestNumber(num1, num2, num3) {
    let result;

    if (num1 >= num2 && num1 >= num3) {
        result = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        result = num2;
    }
    else {
        result = num3;
    }

    console.log(`The largest number is ${result}.`);
}


function calculateTicketPrice(dayType, age) {
    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }
    
    let price;

    switch (dayType) {
        case 'Weekday':
            if (age <= 18) {
                price = 12;
            } else if (age <= 64) {
                price = 18;
            } else {
                price = 12;
            }
            break;
            
        case 'Weekend':
            if (age <= 18) {
                price = 15;
            } else if (age <= 64) {
                price = 20;
            } else {
                price = 15;
            }
            break;
            
        case 'Holiday':
            if (age <= 18) {
                price = 5;
            } else if (age <= 64) {
                price = 12;
            } else {
                price = 10;
            }
            break;
    }
    
    console.log(price + '$');
}


function calculateCircleArea(input) 
{
    let result;
    
    if (typeof input === 'number')
    {
        result = Math.PI * Math.pow(input, 2);

        console.log(result.toFixed(2));
    } else 
    {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}


function printNumbers() 
{
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

function printNumbersMtoN(M, N)
 {
    for (let i = M; i >= N; i--) 
    {
        console.log(i);
    }
}
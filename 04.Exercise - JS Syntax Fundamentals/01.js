function solve_age(age)
{
    if (age < 0)
    {
        console.log("out of bounds");
    }
    else if (age <= 2)
    {
        console.log("baby");
    }
    else if (age <= 13)
    {
        console.log("child");
    }
    else if (age <= 19)
    {
        console.log("teenager");
    }
    else if (age <= 65)
    {
        console.log("adult");
    }
    else
    {
        console.log("elder");
    }
}

function calculate_total_price(num, type, day)
{
    let price = 0;

    switch (type) {
        case "Students":
            switch (day) {
                case "Friday": price = 8.45; break;
                case "Saturday": price = 9.80; break;
                case "Sunday": price = 10.46; break;
            }
        break;
        case "Business":
            switch (day) {
                case "Friday": price = 10.90; break;
                case "Saturday": price = 15.60; break;
                case "Sunday": price = 16.00; break;
            }
        break;
        case "Regular":
            switch (day) {
                case "Friday": price = 15.00; break;
                case "Saturday": price = 20.00; break;
                case "Sunday": price = 22.50; break;
            }
        break;
    }

    if (type === "Students" && num >= 30)
    {
        price *= 0.85;
    }
    else if (type === "Business" && num >= 100)
    {
        num -= 10;
    } 
    else if (type === "Regular" && num >= 10 && num <= 20)
    {
        price *= 0.95;
    }

    console.log(`Total price: ${(num * price).toFixed(2)}`);
}

function is_leap_year(year)
{
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
    {
        console.log("yes");
    }
    else
    {
        console.log("no");
    }
}

function calculate_sum_of_interval(start, end)
{
    let sum = 0;
    let nums = "";

    for (let i = start; i <= end; i++)
    {
        nums += `${i} `;
        sum += i;
    }

    console.log(nums);
    console.log(`Sum: ${sum}`);
}

function multiplication_table(num)
{
    for (let i = 1; i <= 10; i++)
    {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

function sum_digits(num)
{
    let sum = 0;

    while (num > 0)
    {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    console.log(sum);
}

function char_to_string(a, b, c)
{
    let str = "";
    str = a + b + c;
    console.log(str);
}

function char_to_string_reversed(a, b, c)
{
    let str = "";
    str = c + ' ' + b + ' ' + a;
    console.log(str);
}

function buy_fruit(fruit, weight, price_per_kg)
{
    let total_price = weight * price_per_kg / 1000.00;
    console.log(`I need $${total_price.toFixed(2)} to buy ${(weight/1000.00).toFixed(2)} kilograms ${fruit}.`);
}

function check_all_digits_are_same(num)
{
    let last_digit = num % 10;
    let sum = 0;
    let are_same = true;
    while (num > 0)
    {
        if (num % 10 !== last_digit)
        {
            are_same = false;
        }

        sum += num % 10;
        num = Math.floor(num / 10);
    }

    if (are_same)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }

    console.log(sum);
}

function road_radar(speed, area)
{
    let limit = 0;
    let status = "";

    switch (area) {
        case "city": limit = 50; break;
        case "interstate": limit = 90; break;
        case "motorway": limit = 130; break;
        case "residential": limit = 20; break;
    }

    if (speed <= limit)
    {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
    else
    {
        let difference = speed - limit;

        if (difference <= 20)
        {
            status = "speeding";
        }
        else if (difference <= 40)
        {
            status = "excessive speeding";
        }
        else
        {
            status = "reckless driving";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

function coocking_by_numbers(num1, num2, num3, num4, num5, num6)
{
    let result = parseInt(num1);

    let chop = (x) => x / 2;
    let dice = (x) => Math.sqrt(x);
    let spice = (x) => x + 1;
    let bake = (x) => x * 3;
    let fillet = (x) => x - (x * 0.2);

    let cook = (x) => 
    {
        switch (x) {
            case 'chop': return chop(result);
            case 'dice': return dice(result);
            case 'spice': return spice(result);
            case 'bake': return bake(result);
            case 'fillet': return fillet(result);
        }
    };

    result = cook(num2);
    console.log(result);
    result = cook(num3);
    console.log(result);
    result = cook(num4);
    console.log(result);
    result = cook(num5);
    console.log(result);
    result = cook(num6);
    console.log(result);
}

//coocking_by_numbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
coocking_by_numbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

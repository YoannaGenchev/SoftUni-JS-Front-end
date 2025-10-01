function evenOddSubtraction(arr) 
{
    let evenSum = 0;
    let oddSum = 0;
    

    for (let i = 0; i < arr.length; i++) 
    {
        let num = Number(arr[i]);
        
        if (num % 2 === 0)
        {
            evenSum += num;
        } else 
        {
            oddSum += num;
        }
    }
    
    let difference = evenSum - oddSum;
    console.log(difference);
}


evenOddSubtraction([1, 2, 3, 4, 5, 6]);
evenOddSubtraction([3, 5, 7, 9]);
evenOddSubtraction([2, 4, 6, 8, 10])

evenOddSubtraction(['1', '2', '3', '4']);
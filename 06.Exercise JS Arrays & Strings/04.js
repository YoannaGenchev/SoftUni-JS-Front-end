function sortingNumbers(numbers) 
{
    let sorted = numbers.slice().sort((a, b) => a - b);
    
    let result = [];
    let left = 0;
    let right = sorted.length - 1;

    for (let i = 0; i < sorted.length; i++) 
    {
        if (i % 2 === 0) 
        {
            result.push(sorted[left]);
            left++;
        } else 
        {
            result.push(sorted[right]);
            right--;
        }
    }
    
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

function reverseArray(n, arr) 
{
    let newArray = [];
    
    for (let i = 0; i < n; i++)
    {
        newArray.push(arr[i]);
    }
    newArray.reverse();
    
    let output = '';
    for (let element of newArray)
 {
        output += `${element} `;
    }
    console.log(output.trim());
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);
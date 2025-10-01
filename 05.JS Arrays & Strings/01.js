function sumFirstAndLast(arr) 
{
    let firstElement = arr[0];
    
    let lastElement = arr[arr.length - 1];
    
    let sum = firstElement + lastElement;
    console.log(sum);
}

sumFirstAndLast([20, 30, 40]);
sumFirstAndLast([10, 17, 22, 33]);
sumFirstAndLast([11, 58, 69]);
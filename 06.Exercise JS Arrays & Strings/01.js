function arrayRotation(arr, rotations) 
{
    let result = [...arr];

    for (let i = 0; i < rotations; i++) 
    {
        let firstElement = result.shift();
        result.push(firstElement);
    }

    console.log(result.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);

arrayRotation([32, 21, 61, 1], 4);

arrayRotation([2, 4, 15, 31], 5);

arrayRotation([1, 2, 3], 1);

arrayRotation([10, 20, 30, 40], 0);
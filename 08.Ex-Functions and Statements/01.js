
function findSmallestOfThreeManual(a, b, c) 
{

    if (a <= b && a <= c) {
        console.log(a);
    } else if (b <= a && b <= c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

console.log("Example 1: 2, 5, 3");
findSmallestOfThree(2, 5, 3);

console.log("Example 2: 600, 342, 123");
findSmallestOfThree(600, 342, 123);

console.log("Example 3: 25, 21, 4");
findSmallestOfThree(25, 21, 4);

console.log("Example 4: 2, 2, 2");
findSmallestOfThree(2, 2, 2);
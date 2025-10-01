function sum(a, b) {
    return a + b;
}

function subtract(sumResult, c) {
    return sumResult - c;
}

function processThreeNumbers(a, b, c) {
    const sumResult = sum(a, b);
    const finalResult = subtract(sumResult, c);
    console.log(finalResult);
}

console.log("Example 1: 23, 6, 10");
processThreeNumbers(23, 6, 10);

console.log("Example 2: 1, 17, 30");
processThreeNumbers(1, 17, 30);

console.log("Example 3: 42, 58, 100");
processThreeNumbers(42, 58, 100);
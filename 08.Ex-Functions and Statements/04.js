function oddAndEvenSum(number) {
const numStr = Math.abs(number).toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}


console.log("Example 1: 1000435");
oddAndEvenSum(1000435);

console.log("Example 2: 3495892137259234");
oddAndEvenSum(3495892137259234);
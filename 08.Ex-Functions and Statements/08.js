function perfectNumber(num) 
{
    if (num <= 1) {
        console.log("It's not so perfect.");
        return;
    }
    
    let divisorsSum = 0;
    
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            divisorsSum += i;
        }
    }
    
    if (divisorsSum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}


console.log("Example 1: 6");
showDivisors(6);
perfectNumber(6);

console.log("\nExample 2: 28");
showDivisors(28);
perfectNumber(28);

console.log("\nExample 3: 1236498");
perfectNumber(1236498);

console.log("\nAdditional tests:");
console.log("Testing 12:");
showDivisors(12);
perfectNumber(12);

console.log("\nTesting 496 (another perfect number):");
perfectNumber(496);
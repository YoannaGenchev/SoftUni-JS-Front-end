function loadingBar(percentage) 
{
    const filledBars = percentage / 10;

    const emptyBars = 10 - filledBars;

    const loadingBarStr = '%'.repeat(filledBars) + '.'.repeat(emptyBars);

    if (percentage === 100) {
        console.log(`${percentage}% Complete!`);
        console.log(`[${loadingBarStr}]`);
    } else {
        console.log(`${percentage}% [${loadingBarStr}]`);
        console.log("Still loading...");
    }
}

console.log("Example 1: 30%");
loadingBar(30);

console.log("\nExample 2: 50%");
loadingBar(50);

console.log("\nExample 3: 100%");
loadingBar(100);

console.log("\nAdditional tests:");
console.log("\nTesting 0%:");
loadingBar(0);

console.log("\nTesting 70%:");
loadingBar(70);
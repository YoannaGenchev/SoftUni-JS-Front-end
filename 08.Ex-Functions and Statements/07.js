function nxnMatrix(n) 
{
    for (let row = 0; row < n; row++) {
        let rowString = "";
        for (let col = 0; col < n; col++) {
            rowString += n;
            if (col < n - 1) {
                rowString += " ";
            }
        }
        console.log(rowString);
    }
}

console.log("Example 1: 3");
nxnMatrix(3);

console.log("\nExample 2: 7");
nxnMatrix(7);

console.log("\nExample 3: 2");
nxnMatrix(2);
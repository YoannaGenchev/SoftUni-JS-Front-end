function sequences(input) {
    const unique = [];

    for (let line of input) {
        let arr = JSON.parse(line).map(Number);
        arr.sort((a, b) => b - a);
        let key = JSON.stringify([...arr].sort((a, b) => a - b));

        if (!unique.some(x => JSON.stringify([...x].sort((a, b) => a - b)) === key)) {
            unique.push(arr);
        }
    }

    unique
        .sort((a, b) => a.length - b.length)
        .forEach(arr => console.log(`[${arr.join(', ')}]`));
}

sequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);
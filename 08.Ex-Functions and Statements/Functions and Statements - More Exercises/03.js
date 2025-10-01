function pointsValidation([x1, y1, x2, y2]) {
    function isValidDistance(x1, y1, x2, y2) {
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(distance);
    }

    function printValidation(x1, y1, x2, y2) {
        const validity = isValidDistance(x1, y1, x2, y2) ? 'valid' : 'invalid';
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validity}`);
    }

    printValidation(x1, y1, 0, 0);
    printValidation(x2, y2, 0, 0);
    printValidation(x1, y1, x2, y2);
}

pointsValidation([3, 0, 0, 4]);
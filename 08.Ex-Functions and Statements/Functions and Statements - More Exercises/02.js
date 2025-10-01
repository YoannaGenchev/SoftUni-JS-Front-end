function numberModification(number) {
    let numStr = number.toString();

    function averageOfDigits(str) {
        let sum = 0;
        for (let char of str) {
            sum += Number(char);
        }
        return sum / str.length;
    }

    while (averageOfDigits(numStr) <= 5) {
        numStr += '9';
    }

    console.log(numStr);
}

numberModification(101);
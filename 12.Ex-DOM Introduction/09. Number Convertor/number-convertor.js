function solve() {
    const inputNumber = Number(document.getElementById('input').value);
    const toFormat = document.getElementById('selectMenuTo').value;
    const resultField = document.getElementById('result');

    let result = '';

    if (toFormat === 'binary') {
        result = inputNumber.toString(2);
    } else if (toFormat === 'hexadecimal') {
        result = inputNumber.toString(16).toUpperCase();
    }

    resultField.value = result;
}

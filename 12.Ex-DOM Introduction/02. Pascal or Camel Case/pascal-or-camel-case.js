function solve() {
    const textInput = document.getElementById('text').value;
    const convention = document.getElementById('naming-convention').value;
    const resultElement = document.getElementById('result');

    const words = textInput
        .toLowerCase()
        .split(' ')
        .filter(w => w.length > 0);

    let result = '';

    if (convention === 'Camel Case') {
        result = words
            .map((word, index) => index === 0
                ? word
                : word[0].toUpperCase() + word.slice(1))
            .join('');
    } else if (convention === 'Pascal Case') {
        result = words
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join('');
    } else {
        result = 'Error!';
    }

    resultElement.textContent = result;
}

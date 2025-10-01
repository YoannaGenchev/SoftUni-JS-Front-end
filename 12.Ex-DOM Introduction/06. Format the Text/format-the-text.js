function solve() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');

    output.innerHTML = '';

    const sentences = input.split('.').map(s => s.trim()).filter(s => s.length > 0);

    while (sentences.length > 0) {
        const currentSentences = sentences.splice(0, 3);
        const paragraphText = currentSentences.map(s => s + '.').join(' ');
        const paragraph = `<p>${paragraphText}</p>`;
        output.innerHTML += paragraph;
    }
}

function wordsTracker(input) {
    let searchedWords = input[0].split(' ');
    let wordsMap = {};

    for (let word of searchedWords) {
        wordsMap[word] = 0;
    }

    for (let i = 1; i < input.length; i++) {
        let word = input[i];
        if (wordsMap.hasOwnProperty(word)) {
            wordsMap[word]++;
        }
    }

    let sorted = Object.entries(wordsMap)
        .sort((a, b) => b[1] - a[1]);
    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences',
    'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);


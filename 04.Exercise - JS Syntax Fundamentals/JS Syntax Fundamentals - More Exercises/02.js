function wordsUppercase(text) {
    let words = text
        .toUpperCase()
        .match(/\w+/g);

    console.log(words.join(', '));
}

wordsUppercase('Hi, how are you?');

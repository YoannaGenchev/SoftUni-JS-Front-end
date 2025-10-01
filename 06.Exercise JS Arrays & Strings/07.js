function stringSubstring(word, text) 
{
    let wordsArray = text.split(' ');
    let lowerWord = word.toLowerCase();
    
    for (let textWord of wordsArray) {
        if (textWord.toLowerCase() === lowerWord) 
        {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}
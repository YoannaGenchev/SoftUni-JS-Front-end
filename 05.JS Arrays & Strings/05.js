function censoredWords(text, word) 
{
    const asterisks = '*'.repeat(word.length);
    
    const result = text.replaceAll(word, asterisks);
    
    console.log(result);
}

censoredWords('A small sentence with some words', 'small');

censoredWords('Find the hidden word', 'hidden');

censoredWords('This is a test. This test is simple.', 'test');

censoredWords('Hello world, hello everyone!', 'hello');

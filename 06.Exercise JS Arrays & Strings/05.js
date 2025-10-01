function revealWords(words, template) 
{
    let wordArray = words.split(', ').map(word => word.trim());
    
    let result = template;
    
    for (let word of wordArray)
    {
        let asteriskPattern = '*'.repeat(word.length);

        result = result.replace(asteriskPattern, word);
    }
    
    console.log(result);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');

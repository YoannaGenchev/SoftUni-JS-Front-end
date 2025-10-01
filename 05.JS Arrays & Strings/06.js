function countStringOccurrences(text, searchWord) 
{

    const words = text.split(' ');
    
    let count = 0;
    
    for (let word of words) 
    {
        if (word === searchWord) 
        {
            count++;
        }
    }
    
    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');

countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');

countStringOccurrences('The cat sat on the mat. The cat was happy.', 'the');

countStringOccurrences('The cat sat on the mat. The cat was happy.', 'The');

countStringOccurrences('test test test', 'test');

function pascalCaseSplitter(pascalString) {
    let result = [];
    let currentWord = '';
    
    for (let i = 0; i < pascalString.length; i++) 
        {
        let char = pascalString[i];

        if (char === char.toUpperCase() && currentWord !== '') 
            {
            result.push(currentWord);
            currentWord = char;
        } else 
        {
            currentWord += char;
        }
    }
    if (currentWord !== '') 
    {
        result.push(currentWord);
    }
    let output = result.join(', ');
    console.log(output);
}
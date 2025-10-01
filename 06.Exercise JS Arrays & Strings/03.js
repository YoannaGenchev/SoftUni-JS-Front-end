function listOfNames(array) 
{
    let arrayNames = array.sort((a, b) => a.localeCompare(b));
    
    for (let i = 0; i < arrayNames.length; i++) 
    {
        console.log(`${i + 1}.${arrayNames[i]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);

function extract(elementId)
{
    let paragraph = document.getElementById(elementId).textContent;
    let regex = /\(([^)]+)\)/g;
    let results = [];

    let match = regex.exec(paragraph);
    while (match !== null)
    {
        results.push(match[1]);
        match = regex.exec(paragraph);
    }

    return results.join('; ');
}
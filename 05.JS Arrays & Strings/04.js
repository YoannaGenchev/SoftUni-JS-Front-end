function substring(str, startIndex, count) 
{
    const result = str.substring(startIndex, startIndex + count);
    console.log(result);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);

substring('Hello World', 0, 5);
substring('Programming', 3, 4);
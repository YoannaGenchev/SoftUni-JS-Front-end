function charactersInRange(char1, char2) 
{
    const code1 = char1.charCodeAt(0);
    const code2 = char2.charCodeAt(0);
    const start = Math.min(code1, code2);
    const end = Math.max(code1, code2);
    const result = [];
    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }
    console.log(result.join(' '));
}

console.log("Example 1: 'a', 'd'");
charactersInRange('a', 'd');

console.log("Example 2: '#', ':'");
charactersInRange('#', ':');

console.log("Example 3: 'C', '#'");
charactersInRange('C', '#');
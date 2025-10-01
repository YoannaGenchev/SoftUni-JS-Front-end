function palindromeIntegers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const numStr = numbers[i].toString();
        const reversedStr = numStr.split('').reverse().join('');
        const isPalindrome = numStr === reversedStr;
        console.log(isPalindrome.toString());
    }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);
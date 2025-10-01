function passwordValidator(password) 
{
    let isValid = true;
    const errors = [];

    if (password.length < 6 || password.length > 10) {
        isValid = false;
        errors.push("Password must be between 6 and 10 characters");
    }
    
    const onlyLettersAndDigits = /^[a-zA-Z0-9]+$/.test(password);
    if (!onlyLettersAndDigits) {
        isValid = false;
        errors.push("Password must consist only of letters and digits");
    }
    
    const digitCount = (password.match(/\d/g) || []).length;
    if (digitCount < 2) {
        isValid = false;
        errors.push("Password must have at least 2 digits");
    }
    
    if (isValid) {
        console.log("Password is valid");
    } else {
        errors.forEach(error => console.log(error));
    }
}

console.log("Example 1: 'logIn'");
passwordValidator('logIn');

console.log("\nExample 2: 'MyPass123'");
passwordValidator('MyPass123');

console.log("\nExample 3: 'Pa$s$s'");
passwordValidator('Pa$s$s');
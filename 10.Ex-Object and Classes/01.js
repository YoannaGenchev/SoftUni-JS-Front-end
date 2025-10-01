function employees(list) {
    let employeesObj = {};

    for (let name of list) {
        let personalNumber = name.length;
        employeesObj[name] = personalNumber;
    }

    for (let name in employeesObj) {
        console.log(`Name: ${name} -- Personal Number: ${employeesObj[name]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
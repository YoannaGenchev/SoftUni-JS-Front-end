function phoneBook(input) {
    let phonebook = {};

    for (let entry of input) {
        let [name, number] = entry.split(' ');
        phonebook[name] = number;
    }

    for (let name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);

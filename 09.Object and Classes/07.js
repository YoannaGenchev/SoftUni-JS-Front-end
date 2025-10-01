function addressBook(input) {
    let book = {};

    for (let entry of input) {
        let [name, address] = entry.split(':');
        book[name] = address;
    }
    let sortedEntries = Object.entries(book).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of sortedEntries) {
        console.log(`${name} -> ${address}`);
    }
}

addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);

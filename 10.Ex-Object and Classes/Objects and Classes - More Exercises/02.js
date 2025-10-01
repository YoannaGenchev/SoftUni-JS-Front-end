function catalogue(input) {
    let products = input.map(line => {
        let [name, price] = line.split(' : ');
        return { name, price: Number(price) };
    });

    products.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = '';

    for (let product of products) {
        let firstLetter = product.name[0];

        if (firstLetter !== currentLetter) {
            console.log(firstLetter);
            currentLetter = firstLetter;
        }

        console.log(`  ${product.name}: ${product.price}`);
    }
}

catalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10'
]);
function cafeteria(input) {
    const n = Number(input[0]);
    const baristas = {};

    for (let i = 1; i <= n; i++) {
        const [name, shift, drinksStr] = input[i].split(" ");
        const drinks = drinksStr.split(",");
        baristas[name] = {
            shift: shift,
            drinks: drinks
        };
    }

    for (let i = n + 1; i < input.length; i++) {
        const line = input[i];
        if (line === "Closed") break;

        const parts = line.split(" / ");
        const command = parts[0];
        const name = parts[1];

        if (command === "Prepare") {
            const shift = parts[2];
            const coffeeType = parts[3];
            if (
                baristas[name].shift === shift &&
                baristas[name].drinks.includes(coffeeType)
            ) {
                console.log(`${name} has prepared a ${coffeeType} for you!`);
            } else {
                console.log(
                    `${name} is not available to prepare a ${coffeeType}.`
                );
            }
        } else if (command === "Change Shift") {
            const newShift = parts[2];
            baristas[name].shift = newShift;
            console.log(`${name} has updated his shift to: ${newShift}`);
        } else if (command === "Learn") {
            const newDrink = parts[2];
            if (baristas[name].drinks.includes(newDrink)) {
                console.log(`${name} knows how to make ${newDrink}.`);
            } else {
                baristas[name].drinks.push(newDrink);
                console.log(`${name} has learned a new coffee type: ${newDrink}.`);
            }
        }
    }

    for (const [name, info] of Object.entries(baristas)) {
        console.log(
            `Barista: ${name}, Shift: ${info.shift}, Drinks: ${info.drinks.join(", ")}`
        );
    }
}

const input = [
  '4',
  'Alice day Espresso,Cappuccino',
  'Bob night Latte,Mocha',
  'Carol day Americano,Mocha',
  'David night Espresso',
  'Prepare / Alice / day / Espresso',
  'Change Shift / Bob / day',
  'Learn / Carol / Latte',
  'Prepare / Bob / night / Latte',
  'Learn / David / Cappuccino',
  'Prepare / Carol / day / Cappuccino',
  'Change Shift / Alice / night',
  'Learn / Bob / Mocha',
  'Prepare / David / night / Espresso',
  'Closed'
];

cafeteria(input);

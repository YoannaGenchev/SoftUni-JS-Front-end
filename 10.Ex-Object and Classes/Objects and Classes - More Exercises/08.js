function garage(arr) {
    const garages = {};

    for (let line of arr) {
        let [garageNumber, carInfo] = line.split(' - ');
        if (!garages[garageNumber]) {
            garages[garageNumber] = [];
        }
        garages[garageNumber].push(carInfo);
    }

    for (let garage in garages) {
        console.log(`Garage № ${garage}`);
        garages[garage].forEach(car => {
            let formatted = car
                .split(', ')
                .map(p => p.replace(': ', ' - '))
                .join(', ');
            console.log(`--- ${formatted}`);
        });
    }
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);
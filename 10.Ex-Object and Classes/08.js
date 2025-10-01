function piccolo(input) {
    let parkingLot = new Set();

    for (let entry of input) {
        let [direction, carNumber] = entry.split(', ');

        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else if (direction === 'OUT') {
            parkingLot.delete(carNumber);
        }
    }

    let sortedCars = Array.from(parkingLot).sort();

    if (sortedCars.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (let car of sortedCars) {
            console.log(car);
        }
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

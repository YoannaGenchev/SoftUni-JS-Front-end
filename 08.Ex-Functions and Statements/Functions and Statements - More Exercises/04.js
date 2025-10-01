function radioCrystals(input) {
    const targetThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let crystal = input[i];
        console.log(`Processing chunk ${crystal} microns`);

        crystal = processOperation(crystal, 'Cut', x => x / 4, targetThickness);
        crystal = processOperation(crystal, 'Lap', x => x * 0.8, targetThickness);
        crystal = processOperation(crystal, 'Grind', x => x - 20, targetThickness);
        crystal = processOperation(crystal, 'Etch', x => x - 2, targetThickness - 1);

        if (crystal + 1 === targetThickness) {
            crystal++;
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${targetThickness} microns`);
    }

    function processOperation(crystal, name, operationFunc, target) {
        let count = 0;

        while (true) {
            const processed = operationFunc(crystal);
            if (processed < target) break;
            crystal = processed;
            count++;
        }

        if (count > 0) {
            console.log(`${name} x${count}`);
            crystal = Math.floor(crystal);
            console.log('Transporting and washing');
        }

        return crystal;
    }
}

radioCrystals([1375, 50000]);
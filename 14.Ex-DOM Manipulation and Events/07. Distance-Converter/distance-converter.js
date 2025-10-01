document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const input = document.getElementById('inputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');
    const output = document.getElementById('outputDistance');
    const convertBtn = document.getElementById('convert');

    const unitsToMeters = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    };

    convertBtn.addEventListener('click', () => {
        const inputValue = Number(input.value);
        const fromUnit = inputUnits.value;
        const toUnit = outputUnits.value;

        if (!isNaN(inputValue)) {
            const inMeters = inputValue * unitsToMeters[fromUnit];
            const convertedValue = inMeters / unitsToMeters[toUnit];

            output.value = convertedValue;
        } else {
            output.value = 'Invalid input';
        }
    });
}

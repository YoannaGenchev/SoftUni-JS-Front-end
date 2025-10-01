function solve() {
    const output = document.getElementById('output');

    const headers = Array.from(document.querySelectorAll('thead th'));
    const checkedColumns = headers
        .map((th, index) => {
            const input = th.querySelector('input');
            if (input && input.checked) {
                return { name: input.name, index };
            }
            return null;
        })
        .filter(col => col !== null);

    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const result = [];

    for (let row of rows) {
        const cells = Array.from(row.children);
        const entry = {};

        for (let col of checkedColumns) {
            entry[col.name] = cells[col.index].textContent.trim();
        }

        result.push(entry);
    }

    output.value = JSON.stringify(result, null, 2);
}

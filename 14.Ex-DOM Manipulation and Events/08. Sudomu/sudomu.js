document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const form = document.querySelector('#solutionCheck');
    const table = document.querySelector('table');
    const inputs = Array.from(form.querySelectorAll('input[type="number"]'));
    const result = document.getElementById('check');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const size = 3;
        const matrix = [];

        for (let i = 0; i < size; i++) {
            const row = [];
            for (let j = 0; j < size; j++) {
                const value = Number(inputs[i * size + j].value);
                row.push(value);
            }
            matrix.push(row);
        }

        const isValid = checkSudoku(matrix);

        if (isValid) {
            table.style.border = '2px solid green';
            result.textContent = 'Success!';
            result.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            result.textContent = 'Keep trying...';
            result.style.color = 'red';
        }
    });

    form.addEventListener('reset', function () {
        table.style.border = '';
        result.textContent = '';
    });

    function checkSudoku(matrix) {
        const size = matrix.length;

        for (let i = 0; i < size; i++) {
            const row = new Set();
            const col = new Set();
            for (let j = 0; j < size; j++) {
                row.add(matrix[i][j]);
                col.add(matrix[j][i]);
            }
            if (row.size !== size || col.size !== size) {
                return false;
            }
        }
        return true;
    }
}

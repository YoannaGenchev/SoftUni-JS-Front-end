function solve() {
    const searchInput = document.getElementById('searchField').value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    for (let row of rows) {
        row.classList.remove('select');

        const cells = Array.from(row.children);
        const match = cells.some(cell => cell.textContent.toLowerCase().includes(searchInput));

        if (match && searchInput !== '') {
            row.classList.add('select');
        }
    }

    document.getElementById('searchField').value = '';
}

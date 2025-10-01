function solve() {
    const searchInput = document.getElementById('searchText').value.toLowerCase();
    const listItems = document.querySelectorAll('#towns li');
    const result = document.getElementById('result');

    let matches = 0;

    for (let li of listItems) {
        const text = li.textContent.toLowerCase();

        if (text.includes(searchInput) && searchInput !== '') {
            li.classList.add('match');
            li.style.fontWeight = 'bold';
            li.style.textDecoration = 'underline';
            matches++;
        } else {
            li.classList.remove('match');
            li.style.fontWeight = 'normal';
            li.style.textDecoration = 'none';
        }
    }

    result.textContent = `${matches} matches found`;
}

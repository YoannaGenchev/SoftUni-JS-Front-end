function sumTable()
{
    let table = document.querySelector('tbody');
    let total = 0;
    for (let i = 0; i < table.rows.length - 1; i++)
    {
        let row = table.rows[i];
        const childrenSize = row.children.length;
        let price = row.children[childrenSize - 1].textContent;
        total += Number(price);
    }

    document.getElementById('sum').textContent = total;
}
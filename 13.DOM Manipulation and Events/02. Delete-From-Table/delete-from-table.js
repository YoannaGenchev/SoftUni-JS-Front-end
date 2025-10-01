function deleteByEmail()
{
    const emailToDelete = document.getElementsByName('email')[0].value;
    let emails = document.querySelectorAll('#customers tr td:nth-child(2)');
    for (let td of emails)
    {
        if (td.textContent === emailToDelete)
        {
            let row = td.parentElement;
            row.parentElement.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
    }

    document.getElementById('result').textContent = 'Not found.';
}

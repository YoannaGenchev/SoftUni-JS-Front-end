function addItem()
{
    let textToAdd = document.getElementById('newItemText').value;

    if (textToAdd.lenth === 0)
    {
        return;
    }

    let list = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = textToAdd;
    
    let remove = document.createElement('a');
    let removeText = document.createTextNode('[Delete]');
    remove.appendChild(removeText);
    remove.href = '#';
    remove.addEventListener('click', deleteItem);

    li.appendChild(remove);
    list.appendChild(li);

    function deleteItem()
    {
        li.remove();
    }

    document.getElementById('newItemText').value = '';
}

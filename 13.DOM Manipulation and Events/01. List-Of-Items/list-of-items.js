function addItem()
{
    let textToAdd = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(textToAdd));
    document.getElementById('items').appendChild(li);

    document.getElementById('newItemText').value = '';
}
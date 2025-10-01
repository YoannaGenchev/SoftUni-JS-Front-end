document.addEventListener('DOMContentLoaded', solve);

function solve() 
{
    const form = document.querySelector('form');
    const selectMenu = document.getElementById('menu');
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');

    form.addEventListener('submit', (e) => 
    {
        e.preventDefault();

        const text = inputText.value.trim();
        const value = inputValue.value.trim();

        if (text !== '' && value !== '') 
        {
            const option = document.createElement('option');
            option.textContent = text;
            option.value = value;

            selectMenu.appendChild(option);
            inputText.value = '';
            inputValue.value = '';
        }
    });
}

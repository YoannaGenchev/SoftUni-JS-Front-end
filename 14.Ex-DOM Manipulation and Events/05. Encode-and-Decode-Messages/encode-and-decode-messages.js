document.addEventListener('DOMContentLoaded', solve);

function solve() 
{
    const encodeButton = document.querySelector('#encode button');
    const decodeButton = document.querySelector('#decode button');

    const encodeTextarea = document.querySelector('#encode textarea');
    const decodeTextarea = document.querySelector('#decode textarea');

    encodeButton.addEventListener('click', (e) => 
    {
        e.preventDefault();

        const message = encodeTextarea.value;
        let encodedMessage = '';

        for (let char of message) 
        {
            encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
        }

        decodeTextarea.value = encodedMessage;
        encodeTextarea.value = '';
    });

    decodeButton.addEventListener('click', (e) => 
    {
        e.preventDefault();

        const encodedMessage = decodeTextarea.value;
        let decodedMessage = '';

        for (let char of encodedMessage) 
        {
            decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        decodeTextarea.value = decodedMessage;
    });
}

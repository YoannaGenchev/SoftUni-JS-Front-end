function attachEvents()
{
    const refereshButton = document.getElementById('refresh');
    refereshButton.addEventListener('click', async () =>
    {
        const messagesUrl = 'http://localhost:3030/jsonstore/messenger';
        const messagesDiv = document.getElementById('messages');
        messagesDiv.innerHTML = '';

        try
        {
            const response = await fetch(messagesUrl);
            if (!response.ok)
            {
                throw new Error('Error fetching data');
            }

            const messagesData = await response.json();
            const messagesArray = Object.values(messagesData);

            messagesDiv.textContent = messagesArray.map(m => `${m.author}: ${m.content}`).join('\n');
        }
        catch (error)
        {
            messagesDiv.textContent = 'Error';
        }
    });

    const sendButton = document.getElementById('submit');
    sendButton.addEventListener('click', async () =>
    {
        const authorInput = document.getElementsByName('author')[0];
        const contentInput = document.getElementsByName('content')[0];

        const author = authorInput.value.trim();
        const content = contentInput.value.trim();

        if (author === '' || content === '')
        {
            alert('Both author and content fields are required.');
            return;
        }

        const message = {
            author,
            content
        };

        try
        {
            const response = await fetch('http://localhost:3030/jsonstore/messenger',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            });

            if (!response.ok)
            {
                throw new Error('Failed to send message.');
            }

            contentInput.value = '';
        }
        catch (error)
        {
            console.error('Error:', error.message);
        }
    });
}

attachEvents();
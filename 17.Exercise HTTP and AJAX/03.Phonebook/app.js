function attachEvents()
{
    const loadButton = document.getElementById('btnLoad');
    loadButton.addEventListener('click', async () =>
    {
        const phonebookUrl = 'http://localhost:3030/jsonstore/phonebook';
        const phoneBook = document.getElementById('phonebook');
        phoneBook.innerHTML = '';

        try
        {
            const response = await fetch(phonebookUrl);
            if (!response.ok)
            {
                throw new Error('Error fetching data');
            }

            const phones = await response.json();
            const phonesArray = Object.values(phones);

            phonesArray.forEach(phone =>
            {
                const liElement = document.createElement('li');
                liElement.textContent = `${phone.person}: ${phone.phone}`;
                liElement.id = phone._id;

                create_delete_button(liElement);
                phoneBook.appendChild(liElement);
            });
        }
        catch (error)
        {
            messagesDiv.textContent = 'Error';
        }
    });

    const createButton = document.getElementById('btnCreate');
    createButton.addEventListener('click', async () =>
    {
        const phoneBook = document.getElementById('phonebook');
        const personInput = document.getElementById('person');
        const phoneInput = document.getElementById('phone');

        const person = personInput.value.trim();
        const phone = phoneInput.value.trim();

        if (person === '' || phone === '')
        {
            alert('Both person and phone fields are required.');
            return;
        }

        const message = {
            person,
            phone
        };

        try
        {
            const response = await fetch('http://localhost:3030/jsonstore/phonebook',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            });

            if (!response.ok)
            {
                throw new Error('Failed to add number.');
            }

            const result = await response.json();

            personInput.value = '';
            phoneInput.value = '';

            const liElement = document.createElement('li');
            liElement.textContent = `${message.person}: ${message.phone}`;
            liElement.id = result._id;

            create_delete_button(liElement);
            phoneBook.appendChild(liElement);
        }
        catch (error)
        {
            console.error('Error:', error.message);
        }
    });

    async function create_delete_button(liElement)
    {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', async () =>
        {
            try
            {
                const deleteResponse = await fetch(`http://localhost:3030/jsonstore/phonebook/${liElement.id}`, {
                    method: 'DELETE'
                });

                if (!deleteResponse.ok)
                {
                    throw new Error('Error deleting phone entry');
                }

                liElement.remove();
            }
            catch (error)
            {
                alert('Error deleting phone entry');
            }
        });

        liElement.appendChild(deleteButton);
    }
}

attachEvents();